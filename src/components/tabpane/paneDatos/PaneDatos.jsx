import FormularioBusquedaProectos from "../../formularios/FormularioBusquedaProyectos"
import FormularioParticipantes from "../../formularios/FormularioParticipantes"
import FormularioProyectos from "../../formularios/FormularioProyectos"
import BotonAgregarEtapa from "../../botones/BotonAgregarEtapa"
import TablaEtapas from "../../tablas/TablaEtapas"

function PaneDatos() {
    return (
      <>
            <div className="tab-pane fade show active" id="nav-datos" role="tabpanel" aria-labelledby="nav-datos-tab" tabIndex="0">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col p-3 mt-auto">
                        < FormularioProyectos />
                    </div>
                    <div className="col p-3">
                        < FormularioBusquedaProectos />
                    </div>
                </div>

                <FormularioParticipantes />
                <BotonAgregarEtapa />
                <TablaEtapas />
            </div>
      </>
    )
  }
  
  export default PaneDatos