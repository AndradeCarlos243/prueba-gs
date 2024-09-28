import {usuarios as usuariosData} from '../../../data/usuarios.json';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';

export default function MenuSeleccionResponsables() {
  const [responsable, setResponsable] = React.useState('');

  const handleChange = (event) => {
    setResponsable(event.target.value);
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
          <InputLabel id="sel-responsable-proyecto-label" htmlFor="sel-responsable-proyecto">Responsable del proyecto</InputLabel>
          <Select
            labelId="sel-responsable-proyecto-label"
            inputProps={{
              id: 'sel-responsable-proyecto',
            }}
            value={responsable}
            label="Responsables del proyecto"
            onChange={handleChange}
            name='sel-responsable-proyecto'
          >
            {usuariosData.map((usuario) => {
              if(!usuario.administrador)
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