import Botones from "./Botones/Botones"
import Imagen from "./Imagen/Imagen"
import OffCanvas from "./OffCanvas/OffCanvas"

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-light sticky-top p-0 shadow-sm">
          <div className="container-fluid g-0">
              <Botones />
              <Imagen />
              <OffCanvas />
          </div>
      </nav>
    </>
  )
}