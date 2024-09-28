import datos from "../../../assets/datos-generales.svg"
import plan from "../../../assets/plandetrabajo.svg"


function OpcionesPane() {
    return (
      <>
        <nav className="my-3">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link nav-gs active" id="nav-datos-tab" data-bs-toggle="tab" data-bs-target="#nav-datos" type="button" role="tab" aria-controls="nav-datos" aria-selected="true"><img className="icono-tab" src={datos} alt="icono datos" />&nbsp;Datos</button>
              <button className="nav-link nav-gs" id="nav-plan-tab" data-bs-toggle="tab" data-bs-target="#nav-plan" type="button" role="tab" aria-controls="nav-plan" aria-selected="false"><img className="icono-tab" src={plan} alt="icono plan de trabajo" />&nbsp;Plan</button>
          </div>
        </nav>
      </>
    )
  }
  
  export default OpcionesPane