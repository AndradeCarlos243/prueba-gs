import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es-mx';
import dayjs from 'dayjs';
import { RetornaIconoCalendario } from '../../Iconos/RetornaIcono';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function DatePickerGS(propiedades) {
    const gsTheme = createTheme({
        components: {
            MuiDayCalendar: {
                styleOverrides: {
                    header: {
                        fontSize: '.6rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        borderBottom: '1px solid #febd00',
                    },
                    root: {
                        fontSize: '.5rem',
                        padding: '8px',
                        textAlign: 'center',
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: '#febd00',
                        '&:hover': {
                            color: '#febd00',
                        },
                    },
                },
            },
        },
    });
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
                <DemoContainer components={['DatePicker']}>
                    <ThemeProvider theme={gsTheme}>
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
                    </ThemeProvider>
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}