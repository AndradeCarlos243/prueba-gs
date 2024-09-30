import OpcionesPane from "./OpcionesPane/OpcionesPane"
import PaneDatos from "./Panes/PaneDatos"
import PanePlan from "./Panes/PanePlan"

export default function TabPane() {
  return (
    <>
      <main className="container-fluid">
        <div className="row row-cols-1">
          <div className="col p-3">
            <OpcionesPane />
            <div className="tab-content" id="nav-tabContent">
              <PaneDatos />
              <PanePlan />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}