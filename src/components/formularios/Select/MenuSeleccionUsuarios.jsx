import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
    
export default function MenuSeleccionUsuarios(propiedades) {

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: "#febd00",
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <>
            <FormControl sx={{minWidth: 120 }} size="small"  fullWidth>
                <InputLabel id={propiedades.labelId} htmlFor={propiedades.id}>{propiedades.label}</InputLabel>
                <Select
                labelId={propiedades.labelId}
                value={propiedades.value}
                label={propiedades.label}
                onChange={propiedades.onChange}
                name={propiedades.name}
                inputProps={{
                    id: propiedades.id,
                }}
                >
                    {propiedades.data.map((usuario) => {
                        const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
                        return (
                            <MenuItem key={usuario.id} value={usuario.id}>
                                <div className="row">
                                    <div className="col-2 text-end my-auto">
                                        <Avatar {...stringAvatar(nombreCompleto)} 
                                            style={{
                                                margin: "0px",
                                                width: "30px",
                                                height: "30px",
                                                fontSize: "1rem"
                                            }}
                                            className="text-center"
                                        />
                                    </div>
                                    <div className="col-10 text-center">
                                        <span>
                                            {nombreCompleto}
                                        </span>
                                    </div>
                                </div>
                            </MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </>
    )
}