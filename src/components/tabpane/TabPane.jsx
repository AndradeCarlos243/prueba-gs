import PaneDatos from "./paneDatos/PaneDatos"

function TabPane() {
  return (
    <>
      <main className="container-fluid">
          <div className="row row-cols-1">
              <div className="col p-3">
                  <div className="tab-content" id="nav-tabContent">
                    < PaneDatos />
                  </div>
              </div>
          </div>
      </main>
    </>
  )
}

export default TabPane