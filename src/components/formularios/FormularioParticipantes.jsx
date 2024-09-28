import MenuSeleccionAdministrador from "./menusSeleccion/menuSeleccionAdministradores"
import MenuSeleccionInvolucrados from "./menusSeleccion/menuSeleccionInvolucrados"
import MenuSeleccionResponsables from "./menusSeleccion/menuSeleccionResponsables"

function FormularioParticipantes() {
    return (
      <>
        <div className="row row-cols-1 row-cols-md-3 my-3">
            <div className="col">
                <MenuSeleccionResponsables />
            </div>
            <div className="col">
                <MenuSeleccionAdministrador />
            </div>
            <div className="col">
                <MenuSeleccionInvolucrados />
            </div>
        </div>
      </>
    )
  }
  
  export default FormularioParticipantes