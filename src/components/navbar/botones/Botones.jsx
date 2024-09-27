import hamburguesa from '../../../assets/hamburguesa.svg';
import home from '../../../assets/home.svg';
function Botones() {
  return (
    <>
        <div className="ms-0 bg-gs-primary">
            <a className="btn-nav" data-bs-toggle="offcanvas" data-bs-target="#off-canvas-nav" aria-controls="off-canvas-nav" aria-label="Toggler offcanvas lateral">
                <img id="img-hamburguesa" src={hamburguesa} alt="..." />
            </a>
        </div>
        <div className="me-auto">
            <a className="btn-nav">
                <img id="img-home" src={home} alt="..." />
            </a>
        </div>
    </>
  )
}

export default Botones
