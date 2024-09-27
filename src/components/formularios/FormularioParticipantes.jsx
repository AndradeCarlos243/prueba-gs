function FormularioParticipantes() {
    return (
      <>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col">
                    <label htmlFor="sel-responsables-proyecto" className="form-label">Responsables del proyecto</label>
                    <select id="sel-responsables-proyecto" className="form-select" aria-label="Select de responsables del proyecto" defaultValue="">
                        <option value="" disabled required>Agregar responsable del proyecto...</option>
                        <option value="1">DATO 1</option>
                        <option value="2">DATO 2</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="sel-admin-proyecto" className="form-label">Administrador</label>
                    <select id="sel-admin-proyecto" className="form-select" aria-label="Select de administrador del proyecto" defaultValue="">
                        <option value="" disabled required>Agregar administrador del proyecto...</option>
                        <option value="1">DATO 1</option>
                        <option value="2">DATO 2</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="sel-involuc-proyecto" className="form-label">Involucrados (opcional)</label>
                    <select id="sel-involuc-proyecto" className="form-select" aria-label="Select de involucrados del proyecto" defaultValue="">
                        <option value="" disabled>Agregar involucrados del proyecto...</option>
                        <option value="1">DATO 1</option>
                        <option value="2">DATO 2</option>
                    </select>
                </div>
            </div>
      </>
    )
  }
  
  export default FormularioParticipantes