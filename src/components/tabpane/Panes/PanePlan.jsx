import trifuerza from "../../../assets/svg/triforce.svg";
import audio from "../../../assets/mp3/kolog.mp3"
import {TooltipB} from "../../Tooltips/Tooltips";

export default function PaneDatos() {
    const kologAudio = new Audio(audio);

    const kolog = () => {
        kologAudio.play()
    }
    return (
        <>
            <div className="tab-pane fade" id="nav-plan" role="tabpanel" aria-labelledby="nav-plan-tab" tabIndex="0">
                <div className="card text-center">
                    <div className="card-header">
                        Entrega del sistema de prueba para ingreso
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">SISTEMA DE PRUEBA PARA GS</h5>
                        <p className="card-text">
                            Agradezco infinitamente la oportunidad de presentar esta prueba para poder formar parte de la empresa.
                        </p>
                        <ul className="list-group list-group-flush text-start">
                            <li className="list-group-item">Inicio 27 de septiembre a las 11:00am</li>
                            <li className="list-group-item">Finalización 30 de septiembre a las 3:15am</li>
                            <li className="list-group-item">Bootstrap como herramienta de maquetado responsivo y funciones como offCanvas y TabPane.</li>
                            <li className="list-group-item">Mui como herramienta de diseño de componentes.</li>
                            <li className="list-group-item">React como librería de desarrollo y corazón de este sistema.</li>
                        </ul>
                        <a href="#" onClick={kolog}><TooltipB src={trifuerza} alt="Es peligroso ir solo..." id="kolog"/></a>
                    </div>
                    <div className="card-footer text-muted">
                        Carlos Alberto Andrade López - 2282929616
                    </div>
                </div> 
            </div>
        </>
    )
}