import agregar from '../../assets/svg/agregar.svg'
import RetornaIcono from '../Iconos/RetornaIcono'

function BotonAgregarEtapa(propiedades) {
    return (
      <>
        <div className="row row-cols-1">
          <div id="btn-enlace" className="col my-4">
            <RetornaIcono
              src={agregar}
              alt="Agregar etapa"
            />
            <a onClick={propiedades.accion}>
              <span>&nbsp;Agregar etapa</span>
            </a>
          </div>
        </div>
      </>
    )
  }
  
  export default BotonAgregarEtapa