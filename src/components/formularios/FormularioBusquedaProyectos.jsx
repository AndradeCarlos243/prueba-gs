import * as React from "react"
import DatePickerGS from "./DatePickers/DatePickerGS"
import proyectos from "../../data/proyectos.json"
import dayjs from "dayjs"
import Tooltip from "../Tooltips/Tooltips"

export default function FormularioBusquedaProyectos() {
    const [idProyecto, setIdProyecto] = React.useState("");
    const [nombreProyecto, setNombreProyecto] = React.useState("");
    const [descripcionProyecto, setDescripcionProyecto] = React.useState("");
    const [fechaCreacion, setFechaInicio] = React.useState(dayjs().format("YYYY-MM-DD"));
    const [capex, setCapex] = React.useState("");
    const [opex, setOpex] = React.useState("");
    const [pilarProyecto, setPilarProyecto] = React.useState("");
    const [clasifComite, setClasifComite] = React.useState("");
    
    const handleSubmitBuscar = (e) => {
        e.preventDefault();
        const proyecto = proyectos.data.find(proyecto => proyecto.id === idProyecto ? proyecto : null);
        if (proyecto) {
            setNombreProyecto(proyecto.nombreProyecto);
            setDescripcionProyecto(proyecto.descripcionProyecto);
            setFechaInicio(formateoFecha(proyecto.fechaCreacion));
            setCapex(proyecto.capex);
            setOpex(proyecto.opex);
            setPilarProyecto(proyecto.pilarProyecto);
            setClasifComite(proyecto.clasifComite);
        }
        else {
            setNombreProyecto("");
            setDescripcionProyecto("");
            setFechaInicio("");
            setCapex("");
            setOpex("");
            setPilarProyecto("");
            setClasifComite("");
        }
    }

    const handleChangeId = (e) => {
        setIdProyecto(e.target.value);
    }

    const formateoFecha = (fecha) => {
        return fecha.split("-").reverse().join("-");
    }

    return (
      <>
        <form onSubmit={handleSubmitBuscar}>
           <div className="row row-cols-1 bg-gs-tertiary rounded-1">
                <div className="col my-2">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <label htmlFor="txt-id-proyecto" className="form-label">ID Proyecto <Tooltip id="ayu-pro"/></label>
                            <input type="text" className="form-control" id="txt-id-proyecto" value={idProyecto} onChange={handleChangeId}/>
                        </div>
                        <div className="col my-2 my-md-0 mt-md-auto">
                            <button className="btn-gs-primary">Buscar Proyecto</button>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <label htmlFor="txt-nombre-proyecto-dis" className="form-label">Nombre del proyecto</label>
                    <input type="text" className="form-control" id="txt-nombre-proyecto-dis" value={nombreProyecto} readOnly disabled/>
                </div>
                <div className="col mb-2">
                    <label htmlFor="txt-desc-proy-dis" className="form-label">Descripción del proyecto</label>
                    <input type="text" className="form-control" id="txt-desc-proy-dis" value={descripcionProyecto} readOnly disabled/>
                </div>
                <div className="col mb-2">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <p className="form-label">Fecha de creación</p>
                            <DatePickerGS 
                                id="fec-creacion"
                                value={fechaCreacion}
                                label = "Fecha de creación"
                                disabled={true}
                                readOnly = {true}
                                />
                        </div>
                        <div className="col mt-auto">
                            <div className="row row-cols-2">
                                <div className="col">
                                    <label htmlFor="txt-capex-dis" className="form-label">Capex</label>
                                    <input type="text" className="form-control" id="txt-capex-dis" value={capex} readOnly disabled/>
                                </div>
                                <div className="col">
                                    <label htmlFor="txt-opex-dis" className="form-label">Opex</label>
                                    <input type="text" className="form-control" id="txt-opex-dis" value={opex} readOnly disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mt-auto">
                            <label htmlFor="txt-titular-proy" className="form-label">Pilar del proyecto</label>
                            <input type="text" className="form-control firma" id="txt-titular-proy" value={pilarProyecto} readOnly disabled/>
                        </div>
                        <div className="col mt-auto">
                            <label htmlFor="txt-clasif-comite" className="form-label">Clasificación Comité de Inversión</label>
                            <input type="text" className="form-control firma" id="txt-clasif-comite" value={clasifComite} readOnly disabled/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
      </>
    )
}