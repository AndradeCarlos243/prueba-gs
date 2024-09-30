import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogContent } from '@mui/material';
import FormularioAltaEtapa from '../Formularios/FormularioAltaEtapa';
import AlertaEliminarEtapa from '../Formularios/AlertaEliminarEtapa';

export default function ModalAccionEtapa(propiedades) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(propiedades.visible);
    }, [propiedades.visible]);

    return (
        <Dialog
            open={open}
        >
            <DialogContent>
                {propiedades.accion === 'agregar' ?
                    <FormularioAltaEtapa anadirEtapa={propiedades.funcionAceptar} onCancel={propiedades.funcionCancelar} tipo="agregar"/> :
                    propiedades.accion === 'editar' ?
                    <FormularioAltaEtapa etapa={propiedades.etapa} editarEtapa={propiedades.funcionAceptar} onCancel={propiedades.funcionCancelar} tipo="editar" /> :
                    propiedades.accion === 'eliminar' ?
                    <AlertaEliminarEtapa etapa={propiedades.etapa} eliminarEtapa={propiedades.funcionAceptar} onCancel={propiedades.funcionCancelar} /> : null
                }
            </DialogContent>
        </Dialog>
    );
}