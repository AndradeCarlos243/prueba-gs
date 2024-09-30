import calendario from "../../assets/svg/calendario.svg";
import Editar from "../../assets/svg/editar.svg";
import eliminar from "../../assets/svg/delete.svg";

export default function RetornaIcono(propiedades)
{
  return(
    <img src={propiedades.src} alt={propiedades.alt} width={20}/>
  )
}

export function RetornaIconoEditar () {
  return (
    <img src={Editar} alt="Editar registro" width={20}/>
  )
}

export function RetornaIconoEliminar () {
  return (
    <img src={eliminar} alt="Eliminar registro" width={20}/>
  )
}

export function RetornaIconoCalendario () {
  return (
    <img src={calendario} alt="Calendario" width={20}/>
  )
}

