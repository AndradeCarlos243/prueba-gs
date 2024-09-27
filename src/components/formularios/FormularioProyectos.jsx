
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
                    <select id="sel-obj-proyecto" className="form-select" aria-label="Select de objetivos del proyecto" defaultValue="">
                        <option value="" disabled></option>
                        <option value="1">DATO 1</option>
                        <option value="2">DATO 2</option>
                    </select>
                </div>
                <div className="col mb-2">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <label htmlFor="txt-fecha-inicio" className="form-label">Fecha de inicio</label>
                            <input type="text" className="form-control datepicker" id="txt-fecha-inicio" />
                        </div>
                        <div className="col">
                            <label htmlFor="txt-fecha-fin" className="form-label">Fecha de fin</label>
                            <input type="text" className="form-control datepicker" id="txt-fecha-fin" />
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