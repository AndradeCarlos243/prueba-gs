import agregar from '../../assets/agregar.svg'

function BotonAgregarEtapa() {
    return (
      <>
        <div className="row row-cols-1">
            <div id="btn-enlace" className="col my-4">
                <img src={agregar} alt="agregar etapa" />
                <a data-bs-toggle="modal" data-bs-target="#modal-etapa">
                    <span>&nbsp;Agregar etapa</span>
                </a>
            </div>
        </div>
      </>
    )
  }
  
  export default BotonAgregarEtapa