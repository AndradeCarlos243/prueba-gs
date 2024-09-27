function OffCanvas() {
    return (
      <>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="off-canvas-nav" aria-labelledby="lbl-off-canvas">
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="lbl-off-canvas">Opciones</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                    </ul>
                </div>
            </div>
      </>
    )
  }
  
  export default OffCanvas