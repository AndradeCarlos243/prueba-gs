import agregar from '../../assets/agregar.svg'

function BotonAgregarEtapa() {
    return (
      <>
            <div className="row row-cols-1 mt-4">
                <div id="btn-enlace" className="col">
                    <img src={agregar} alt="agregar etapa" />
                    <a className="btn-enlace" data-bs-toggle="modal" data-bs-target="#modal-etapa">
                        <span>Agregar etapa</span>
                    </a>
                </div>
            </div>
      </>
    )
  }
  
  export default BotonAgregarEtapa