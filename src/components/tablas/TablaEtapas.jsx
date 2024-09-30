import * as React from 'react';
import BotonAgregarEtapa from "../Botones/BotonAgregarEtapa"
import Paper from '@mui/material/Paper';
import {columnas} from "../../data/columnasEtapas"
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RetornaIconoEditar, RetornaIconoEliminar } from '../Iconos/RetornaIcono';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../dayjs/locale/es-mx';

export default function TablaEtapas(propiedades) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const gsTheme = createTheme({
    components: {
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontSize: '1rem',
            fontWeight: 'bold',
            padding: '8px',
            textAlign: 'center',
            backgroundColor: '#b0b3b5',
          },
          root: {
            fontSize: '1rem',
            padding: '8px',
            textAlign: 'center',
          },
        },
      },
    },
  });

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx" >
            <ThemeProvider theme={gsTheme}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columnas.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ top: 0, minWidth: column.minWidth }}
                      >
                        {column.label === "EDITAR" ? (<RetornaIconoEditar />) : column.label === "ELIMINAR" ? (<RetornaIconoEliminar />) : column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {propiedades.etapas
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((fila) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={fila.id}>
                          {columnas.map((column) => {
                            const value = fila[column.id];
                            if(column.id === "editar")
                            {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <a role='button' onClick={() => propiedades.handleEditar(fila.id)} className="link-dark link-offset-2">Editar</a>
                                </TableCell>
                              );
                            }
                            else if(column.id === "eliminar")
                            {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <a role='button' onClick={() => propiedades.handleEliminar(fila.id)} className="link-dark link-offset-2">Eliminar</a>
                                </TableCell>
                              );
                            }
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                  }
                </TableBody>
              </Table>
            </ThemeProvider>
          </LocalizationProvider>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={propiedades.etapas.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          id='select-rows-per-page'
          labelDisplayedRows={
            ({ from, to, count }) => {
              return 'Mostrando' + from + '-' + to + ' etapas de ' + count
            }
          }
          labelRowsPerPage={'Etapas por página'}
        />
      </Paper>
      <BotonAgregarEtapa />
    </>
  );
}
