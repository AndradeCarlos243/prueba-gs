import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es-mx';
import dayjs from 'dayjs';
import { RetornaIconoCalendario } from '../../Iconos/RetornaIcono';

export default function DatePickerGS(propiedades) {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label= {propiedades.label}
                        value={dayjs(propiedades.value)}
                        onChange={(newValue) => propiedades.setValue(newValue)}
                        slots={{
                            openPickerIcon: RetornaIconoCalendario,
                        }}
                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                        disabled = {propiedades.disabled !== undefined ? propiedades.disabled : false}
                        readOnly = {propiedades.readOnly !== undefined ? propiedades.readOnly : false}
                        id={propiedades.id}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}