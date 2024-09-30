import {objetivos as objetivosData} from '../../../data/objetivos';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function MenuSeleccionObjetivos(propiedades) {
  return (
    <>
      <FormControl sx={{minWidth: 120 }} size="small" fullWidth>
        <InputLabel id="obj-proyecto-label">Objetivos del proyecto</InputLabel>
        <Select
          labelId="obj-proyecto-label"
          id={propiedades.id}
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
      </FormControl>
    </>
  )
}