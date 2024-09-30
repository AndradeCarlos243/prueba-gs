import { Avatar } from '@mui/material'
import imagenUsuario from '../../../assets/img/carlos_andrade.jpg'

export default function Imagen() {
  return (
    <>
      <Avatar
        alt="Carlos Andrade"
        src={imagenUsuario}
        sx={{ width: 50, height: 50 }}
      />
    </>
  )
}
