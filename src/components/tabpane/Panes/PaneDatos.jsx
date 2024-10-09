import FormularioBusquedaProyectos from "../../Formularios/FormularioBusquedaProyectos"
import FormularioParticipantes from "../../Formularios/FormularioParticipantes"
import FormularioProyectos from "../../Formularios/FormularioProyectos"
import BotonAgregarEtapa from "../../Botones/BotonAgregarEtapa"
import TablaEtapas from "../../Tablas/TablaEtapas"
import filas from "../../../data/filasEtapas"
import { useState } from "react";
import ModalAccionEtapa from "../../Modales/ModalAccionEtapa"

export default function PaneDatos() {
    const [etapas, setEtapas] = useState(filas.etapas);
    const [etapaActual, setEtapaActual] = useState(null);
    const [etapaAEliminar, setEtapaAEliminar] = useState(null);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [accion, setAccion] = useState(null);
    
    const handleEliminar = (id) => {
    setEtapaAEliminar(id);
    handleMostrarModal("eliminar");
    };

    const eliminarEtapa = (id) => {
    const etapasActualizadas = etapas.filter((etapa) => etapa.id !== id);
    setEtapas(etapasActualizadas);
    setEtapaAEliminar(null);
    setMostrarModal(false);
    };

    const handleEditar = (id) => {
    const etapa = etapas.find((etapa) => etapa.id === id);
    setEtapaActual(etapa);
    handleMostrarModal("editar");
    };

    const editarEtapa = (etapaActualizada) => {
    const etapasActualizadas = etapas.map((eetapa) =>
        eetapa.id === etapaActualizada.id ? etapaActualizada : eetapa
    );
    setEtapas(etapasActualizadas);
    setEtapaActual(null);
    setMostrarModal(false);
    };

    const anadirEtapa = (etapa) => {
        const nuevaEtapa = {
            id: Math.floor(Math.random() * 1000),
            ...etapa,
        };
        const etapasActualizadas = [...etapas, nuevaEtapa];
        setEtapas(etapasActualizadas);
    };

    const handleMostrarModal = (accion) => {
        setAccion(accion);
        setMostrarModal(true);
    }

    const handleCloseModal = () => {
        setMostrarModal(false);
    }

    const handleCloseModalAndSetDefault = () => {
        setMostrarModal(false);
        setEtapaActual(null);
    }
    
    return (
        <>
            <div className="tab-pane fade show active" id="nav-datos" role="tabpanel" aria-labelledby="nav-datos-tab" tabIndex="0">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col p-3 mt-auto">
                        <FormularioProyectos />
                    </div>
                    <div className="col p-3">
                        <FormularioBusquedaProyectos />
                    </div>
                </div>

                <FormularioParticipantes />
                <BotonAgregarEtapa 
                    accion={() => handleMostrarModal("agregar")}
                />
                {etapas.length > 0 && (
                    <div className="row p-3 mx-auto form-control">
                        <div className="col p-1 p-md-3">
                            <h4>Etapas</h4>
                            <TablaEtapas
                                etapas={etapas}
                                handleEditar={handleEditar}
                                handleEliminar={handleEliminar}
                                accionAltaEtapa={() => handleMostrarModal("agregar")}
                            />
                        </div>
                    </div>
                )}
            </div>
            {mostrarModal && 
            (
                <ModalAccionEtapa 
                    visible={mostrarModal}
                    handleClose={handleCloseModal}
                    accion={accion}
                    funcionAceptar = {accion === "agregar" ? anadirEtapa : accion === "editar" ? editarEtapa : accion === "eliminar" ? eliminarEtapa: null}
                    funcionCancelar = {accion === "agregar" ? handleCloseModal : accion === "editar" ? handleCloseModalAndSetDefault : accion === "eliminar" ? handleCloseModalAndSetDefault: null}
                    etapa = {accion === "editar" ? etapaActual : accion === "eliminar" ? etapas.find((etapa) => etapa.id === etapaAEliminar) : null}
                />
            )}
        </>
    )
}
