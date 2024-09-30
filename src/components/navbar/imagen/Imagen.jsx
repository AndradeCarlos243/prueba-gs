import { Avatar } from '@mui/material'
import imagenUsuario from '../../../assets/img/carlos_andrade.jpg'

export default function Imagen() {
  return (
    <>
      <Avatar
        className='border border-2 border-secondary m-2'
        imgProps={{ loading: "lazy", className: "img-fluid" }}
        alt="Carlos Andrade"
        src={imagenUsuario}
        sx={{ width: 50, height: 50 }}
      />
    </>
  )
}
