import Botones from "./botones/Botones"
import Imagen from "./imagen/Imagen"
import OffCanvas from "./offCanvas/offCanvas"


function Navbar() {
  return (
    <>
        <nav className="navbar bg-light sticky-top p-0 shadow-sm">
            <div className="container-fluid g-0">
                < Botones/>
                < Imagen/>
                < OffCanvas/>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar
