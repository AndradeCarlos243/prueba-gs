import MenuSeleccionObjetivos from "./Select/MenuSeleccionObjetivos"
import Tooltip from "../Tooltips/Tooltips"
import * as React from 'react';
import dayjs from 'dayjs';
import DatePickerGS from "./DatePickers/DatePickerGS"

function FormularioProyectos() {
    
    const [fechaInicio, setFechaInicio] = React.useState(dayjs().format('YYYY-MM-DD'));
    const [fechaFin, setFechaFin] = React.useState(dayjs().format('YYYY-MM-DD'));
    const [idSistemaORC, setIdSistemaORC] = React.useState("");
    const [nombreProyecto, setNombreProyecto] = React.useState("");
    const [descripcionProyecto, setDescripcionProyecto] = React.useState("");
    const [objetivosProyecto, setObjetivosProyecto] = React.useState([]);

    const handleSubmitProyecto = (e) => {
        e.preventDefault();
        const idRandom = Math.floor(Math.random() * 1000);
        setIdSistemaORC("id random: "+idRandom);
        console.log("ID Sistema ORC: ", idSistemaORC);
        console.log("Nombre del proyecto: ", nombreProyecto);
        console.log("Descripcion del proyecto: ", descripcionProyecto);
        console.log("Objetivos del proyecto: ", objetivosProyecto);
        console.log("Fecha de inicio: ", dayjs(fechaInicio).format('YYYY-MM-DD'));
        console.log("Fecha de fin: ", dayjs(fechaFin).format('YYYY-MM-DD'));
        
    }

    const handleIdSistemaORCChange = (e) => {
        setIdSistemaORC(e.target.value);
    }

    const handleNombreProyectoChange = (e) => {
        setNombreProyecto(e.target.value);
    }

    const handleDescripcionProyectoChange = (e) => {
        setDescripcionProyecto(e.target.value);
    }

    const handleObjetivosProyectoChange = (e) => {
        setObjetivosProyecto(e.target.value);
    }

    const handleFechaInicioChange = (e) => {
        setFechaInicio(e.$d);
    }

    const handleFechaFinChange = (e) => {
        setFechaFin(e.$d);
    }

    return (
        <>
            <form onSubmit={handleSubmitProyecto}>
                <div className="row row-cols-1">
                    <div className="col my-2">
                        <label htmlFor="txt-id-orc" className="form-label">ID Sistema ORC&apos;s</label>
                        <input type="text" 
                            className="form-control" 
                            id="txt-id-orc" 
                            value={idSistemaORC} 
                            onChange={handleIdSistemaORCChange} 
                            disabled
                        />
                    </div>
                    <div className="col mb-2">
                        <label htmlFor="txt-nombre-proyecto" className="form-label">Nombre del proyecto</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="txt-nombre-proyecto"  
                            value={nombreProyecto} 
                            onChange={handleNombreProyectoChange} 
                            required
                        />
                    </div>
                    <div className="col mb-2">
                        <label htmlFor="txt-desc-proyecto" className="form-label">Descripcion del proyecto</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="txt-desc-proyecto" 
                            value={descripcionProyecto} 
                            onChange={handleDescripcionProyectoChange} 
                            required
                        />
                    </div>
                    <div className="col mb-2">
                        <p className="form-label">Objetivos a los que contribuye el proyecto</p>
                        <MenuSeleccionObjetivos id="sel-obj-proyecto" value={objetivosProyecto} onChange={handleObjetivosProyectoChange}  />
                    </div>
                    <div className="col mb-2">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <p className="form-label">Fecha de inicio <Tooltip id="fec-ini" /></p>
                                <DatePickerGS 
                                    id="fec-ini"
                                    value={fechaInicio}
                                    setValue={handleFechaInicioChange}
                                    label = "Fecha de inicio"
                                />
                            </div>
                            <div className="col">
                                <p className="form-label">Fecha de fin <Tooltip id="fec-fin" /></p>
                                <DatePickerGS 
                                    id="fec-fin"
                                    value={fechaFin}
                                    setValue={handleFechaFinChange}
                                    label = "Fecha de fin"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col my-2">
                        <button className="btn-gs-primary">Prioridad de proyecto</button>
                    </div>
                </div>
            </form>
        </>
    )
}
  
  export default FormularioProyectos