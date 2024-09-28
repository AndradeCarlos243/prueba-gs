import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import IconoCalendario from "../../iconos/IconoCalendario";
import 'dayjs/locale/es-mx';

export default function DatePickerInactivo() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label= "Fecha de inicio"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slots={{
            openPickerIcon: IconoCalendario,
          }}
          slotProps={{ textField: { fullWidth: true } }}
          disabled
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}