import hamburguesa from '../../../assets/svg/hamburguesa.svg';
import home from '../../../assets/svg/home.svg';
import RetornaIcono from '../../Iconos/RetornaIcono';
export default function Botones() {
  return (
    <>
        <div className="ms-0 bg-gs-primary">
            <a className="btn-nav" data-bs-toggle="offcanvas" data-bs-target="#off-canvas-nav" aria-controls="off-canvas-nav" aria-label="Toggler offcanvas lateral">
                <RetornaIcono
                    src={hamburguesa}
                    alt="Menú"
                />
            </a>
        </div>
        <div className="me-auto">
            <a className="btn-nav">
                <RetornaIcono
                    src={home}
                    alt="Inicio"
                />
            </a>
        </div>
    </>
  )
}
