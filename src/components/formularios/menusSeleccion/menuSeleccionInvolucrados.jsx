import {usuarios as usuariosData} from '../../../data/usuarios.json';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
    
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(nombre, involucrado, tema) {
    return {
        fontWeight: involucrado.includes(nombre)
        ? tema.typography.fontWeightMedium
        : tema.typography.fontWeightRegular,
    };
}

export default function MenuSeleccionInvolucrados() {
    const tema = useTheme();
    const [involucrado, setInvolucrado] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInvolucrado(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="sel-involucrados-label" htmlFor="sel-involucrados">Involucrados (opcional)</InputLabel>
                <Select
                labelId="sel-involucrados-label"
                multiple
                value={involucrado}
                onChange={handleChange}
                input={<OutlinedInput id="sel-involucrados" label="Involucrados (opcional)" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {usuariosData.map((usuario) => {
                    usuario.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
                    return (
                        <MenuItem 
                            key={usuario.id} 
                            value={usuario.nombreCompleto}
                            style={getStyles(usuario.nombreCompleto, involucrado, tema)}>
                            {usuario.nombreCompleto}
                        </MenuItem>
                    )
                })}
                </Select>
            </FormControl>
        </div>
    );
}