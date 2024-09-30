import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider } from '@mui/material/styles';
    
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
            MuiChip: {
                styleOverrides: {
                    root: {
                        fontSize: '.8rem',
                        height: '20%',
                        backgroundColor: "#ffe390",
                        '&:hover': {
                            backgroundColor: '#fff4d3',
                        },
                    },
                },
            },
        },
    });

    const tema = useTheme();
    return (
        <>
            <div>
                <FormControl sx={{ minWidth: 120 }} size="small"  fullWidth>
                    <InputLabel id={propiedades.labelId} htmlFor={propiedades.id}>{propiedades.label}</InputLabel>
                    <ThemeProvider theme={gsTheme}>
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
                    </ThemeProvider>
                </FormControl>
            </div>
        </>
    );
}