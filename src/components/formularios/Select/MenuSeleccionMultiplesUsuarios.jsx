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

export default function MenuSeleccionMultiplesUsuarios(propiedades) {
    const tema = useTheme();
    return (
        <>
            <div>
                <FormControl sx={{ minWidth: 120 }} size="small"  fullWidth>
                    <InputLabel id={propiedades.labelId} htmlFor={propiedades.id}>{propiedades.label}</InputLabel>
                    <Select
                        labelId={propiedades.labelId}
                        multiple
                        value={propiedades.value}
                        onChange={propiedades.onChange}
                        input={<OutlinedInput id={propiedades.id} label={propiedades.label} />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {propiedades.data.map((usuario) => {
                            usuario.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
                            return (
                                <MenuItem 
                                    key={usuario.id} 
                                    value={usuario.nombreCompleto}
                                    style={getStyles(usuario.nombreCompleto, propiedades.value, tema)}>
                                    {usuario.nombreCompleto}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </div>
        </>
    );
}