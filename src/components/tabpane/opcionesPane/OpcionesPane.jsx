
function OpcionesPane() {
    return (
      <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link nav-gs active" id="nav-datos-tab" data-bs-toggle="tab" data-bs-target="#nav-datos" type="button" role="tab" aria-controls="nav-datos" aria-selected="true">Datos</button>
                    <button className="nav-link nav-gs" id="nav-plan-tab" data-bs-toggle="tab" data-bs-target="#nav-plan" type="button" role="tab" aria-controls="nav-plan" aria-selected="false">Plan</button>
                </div>
            </nav>
      </>
    )
  }
  
  export default OpcionesPane