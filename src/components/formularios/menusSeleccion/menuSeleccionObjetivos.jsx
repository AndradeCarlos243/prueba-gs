import {objetivos as objetivosData} from '../../../data/objetivos';

function MenuSeleccionObjetivos() {
    return (
      <>
        <select className="form-select" id='sel-obj-proyecto'>
            <option value="0">Selecciona un objetivo</option>
            {objetivosData.map((objetivo) => {
                return (
                    <option key={objetivo.id} value={objetivo.id}>{objetivo.nombre}</option>
                )
            })}
        </select>
      </>
    )
  }

    export default MenuSeleccionObjetivos