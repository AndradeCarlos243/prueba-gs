import DatePicker from "./datePickers/DatePicker";

function FormularioBusquedaProectos() {
    return (
      <>
           <div className="row row-cols-1 bg-gs-tertiary rounded-1">
                <div className="col my-2">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <label htmlFor="txt-id-proyecto" className="form-label">ID Proyecto</label>
                            <input type="text" className="form-control" id="txt-id-proyecto" />
                        </div>
                        <div className="col my-2 my-md-0 mt-md-auto">
                            <button className="btn-gs-primary">Buscar Proyecto</button>
                        </div>
                    </div>
                </div>
                <div className="col mb-2">
                    <label htmlFor="txt-nombre-proyecto-dis" className="form-label">Nombre del proyecto</label>
                    <input type="text" className="form-control" id="txt-nombre-proyecto-dis" disabled />
                </div>
                <div className="col mb-2">
                    <label htmlFor="txt-desc-proy-dis" className="form-label">Descripción del proyecto</label>
                    <input type="text" className="form-control" id="txt-desc-proy-dis" disabled />
                </div>
                <div className="col mb-2">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col">
                            <p className="form-label">Fecha de creación</p>
                            <DatePicker />
                        </div>
                        <div className="col">
                            <div className="row row-cols-2">
                                <div className="col">
                                    <label htmlFor="txt-capex-dis" className="form-label">Capex</label>
                                    <input type="text" className="form-control" id="txt-capex-dis" disabled />
                                </div>
                                <div className="col">
                                    <label htmlFor="txt-opex-dis" className="form-label">Opex</label>
                                    <input type="text" className="form-control" id="txt-opex-dis" disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col mt-auto">
                            <label htmlFor="txt-titular-proy" className="form-label">Pilar del proyecto</label>
                            <input type="text" className="form-control firma" id="txt-titular-proy" />
                        </div>
                        <div className="col mt-auto">
                            <label htmlFor="txt-clasif-comite" className="form-label">Clasificación Comité de Inversión</label>
                            <input type="text" className="form-control firma" id="txt-clasif-comite" />
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
  }
  
  export default FormularioBusquedaProectos