import {usuarios as usuariosData} from '../../../data/usuarios.json';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
    
export default function MenuSeleccionAdministrador() {
    const [administrador, setAdministrador] = React.useState('');

    const handleChange = (event) => {
        setAdministrador(event.target.value);
    };

    function stringToColor(string) {
        let hash = 0;
        let i;
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
      
        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <>
        <FormControl fullWidth>
            <InputLabel id="sel-administrador-proyecto-label" htmlFor="sel-administrador-proyecto">Administrador del proyecto</InputLabel>
            <Select
            labelId="sel-administrador-proyecto-label"
            value={administrador}
            label="administrador del proyecto"
            onChange={handleChange}
            name='sel-administrador-proyecto'
            inputProps={{
                id: 'sel-administrador-proyecto',
            }}
            >
                {usuariosData.map((usuario) => {
                    if(usuario.administrador)
                    {
                        const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
                        return (
                            <MenuItem key={usuario.id} value={usuario.id}>
                                <p style={{display: "flex", alignItems: "center"}}>
                                <Avatar {...stringAvatar(nombreCompleto)} 
                                style={{
                                    margin: "0px",
                                    width: "30px",
                                    height: "30px",
                                    fontSize: "1rem"
                                }} 
                                />
                                &nbsp;{nombreCompleto}
                                </p>
                            </MenuItem>
                        )
                    }
                })}
            </Select>
        </FormControl>
        </>
    )
}