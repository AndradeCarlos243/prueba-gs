import imagenUsuario from '../../../assets/carlos_andrade.jpg'

function Imagen() {
    return (
      <>
        <div className="me-0 ms-auto">
            <a className="btn-nav">
                <img id="img-usuario" src={imagenUsuario} className="rounded-circle border border-secondary" alt="..." />
            </a>
        </div>
      </>
    )
  }
  
  export default Imagen