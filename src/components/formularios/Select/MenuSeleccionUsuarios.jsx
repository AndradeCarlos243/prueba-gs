import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
    
export default function MenuSeleccionUsuarios(propiedades) {

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: "#febd00",
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    const gsTheme = createTheme({
        select: {
            '&:before': {
                borderColor: 'white',
            },
            '&:after': {
                borderColor: 'white',
            },
            '&:not(.Mui-disabled):hover::before': {
                borderColor: 'white',
            },
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        fontSize: '.5rem',
                        textAlign: 'left',
                        color: 'black',
                        height: '20%',
                        '&::-webkit-scrollbar': {
                            width: '0.7em',
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#febd00',
                            BorderRadius: '10px',
                        },
                        "&& .Mui-selected": {
                            backgroundColor: "#ffe390",
                            "&:hover": {
                                backgroundColor: "#fff4d3",
                            },
                        },
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        display: 'block',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        containerType: 'inline-size',
                        "&:hover": {
                            backgroundColor: "#fff4d3",
                        }
                    },
                },
            },
        },
    });

    return (
        <>
            <FormControl sx={{minWidth: 120 }} size="small"  fullWidth>
                <InputLabel id={propiedades.labelId} htmlFor={propiedades.id}>{propiedades.label}</InputLabel>
                <ThemeProvider theme={gsTheme}>
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
                </ThemeProvider>
            </FormControl>
        </>
    )
}