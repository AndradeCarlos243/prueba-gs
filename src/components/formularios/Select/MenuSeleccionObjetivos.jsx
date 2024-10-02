import {objetivos as objetivosData} from '../../../data/objetivos';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


export default function MenuSeleccionObjetivos(propiedades) {
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
      <FormControl sx={{minWidth: 120 }} size="small" fullWidth>
        <InputLabel id="obj-proyecto-label" htmlFor={propiedades.id}>Objetivos del proyecto</InputLabel>
        <ThemeProvider theme={gsTheme}>
          <Select
            labelId="obj-proyecto-label"
            name={'obj-proyecto'}
            inputProps={{
              id: propiedades.id,
            }}
            value={propiedades.value}
            label="Objetivos del proyecto"
            onChange={propiedades.onChange}
            required
          >
            <MenuItem value="">
              <em>Selecciona un objetivo</em>
            </MenuItem>
            {objetivosData.map((objetivo) => {
              return (
                <MenuItem key={objetivo.id} value={objetivo.id}>{objetivo.descripcion}</MenuItem>
              )
            })}
          </Select>
        </ThemeProvider>
      </FormControl>
    </>
  )
}