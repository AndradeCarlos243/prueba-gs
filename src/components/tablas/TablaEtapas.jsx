import BotonAgregarEtapa from "../botones/BotonAgregarEtapa"
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {columnas} from "../../data/columnasEtapas"
import {filas} from "../../data/filasEtapas"

const paginationModel = { page: 0, pageSize: 5 };

export default function TablaEtapas() {
    console.log(filas)
    console.log(columnas)
  return (
    <>
        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={filas}
            columns={columnas}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
        />
        </Paper>

        <BotonAgregarEtapa />
    </>
  );
}
