import MenuSeleccionObjetivos from "./menusSeleccion/menuSeleccionObjetivos"
import DatePickerActivo from "./datePickers/DatePickerActivo"

function FormularioProyectos() {
    return (
      <>
        <div className="row row-cols-1">
            <div className="col my-2">
                <label htmlFor="txt-id-orc" className="form-label">ID Sistema ORC&apos;s</label>
                <input type="text" className="form-control" id="txt-id-orc" disabled />
            </div>
            <div className="col mb-2">
                <label htmlFor="txt-nombre-proyecto" className="form-label">Nombre del proyecto</label>
                <input type="text" className="form-control" id="txt-nombre-proyecto" disabled />
            </div>
            <div className="col mb-2">
                <label htmlFor="txt-desc-proyecto" className="form-label">Descripcion del proyecto</label>
                <input type="text" className="form-control" id="txt-desc-proyecto" disabled />
            </div>
            <div className="col mb-2">
                <label htmlFor="sel-obj-proyecto" className="form-label">Objetivos a los que contribuye el proyecto</label>
                <MenuSeleccionObjetivos id="sel-obj-proyecto" />
            </div>
            <div className="col mb-2">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <p className="form-label">Fecha de inicio</p>
                        <DatePickerActivo />
                    </div>
                    <div className="col">
                        <p className="form-label">Fecha de fin</p>
                        <DatePickerActivo />
                    </div>
                </div>
            </div>
            <div className="col my-2">
                <button className="btn-gs-primary">Prioridad de proyecto</button>
            </div>
        </div>
      </>
    )
  }
  
  export default FormularioProyectos