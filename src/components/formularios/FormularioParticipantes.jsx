import * as React from 'react'
import MenuSeleccionMultiplesUsuarios from "./Select/MenuSeleccionMultiplesUsuarios"
import MenuSeleccionUsuarios from "./Select/menuSeleccionUsuarios"
import dataUsuarios from "../../data/usuarios.json"

export default function FormularioParticipantes() {
  const [responsable, setResponsable] = React.useState('');
  const [administrador, setAdministrador] = React.useState('');
  const [involucrados, setInvolucrados] = React.useState([]);

  const administradores = dataUsuarios.usuarios.filter(usuario => usuario.administrador);
  const responsables = dataUsuarios.usuarios.filter(usuario => !usuario.administrador);

  const handleChangeResponsable = (event) => {
    setResponsable(event.target.value);
  };

  const handleChangeAdministrador = (event) => {
    setAdministrador(event.target.value);
  };

  const handleChangeInvolucrados = (event) => {
    const {
      target: { value },
    } = event;
    setInvolucrados(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 mx-auto my-2">
          <div className="col mt-auto mb-3">
            <MenuSeleccionUsuarios
              data = {responsables}
              labelId = "sel-responsable-proyecto-label"
              value = {responsable}
              label = "Responsable del proyecto"
              onChange = {handleChangeResponsable}
              name = "sel-responsable-proyecto"
              id = "sel-responsable-proyecto"
              />
          </div>
          <div className="col mt-auto mb-3">
            <MenuSeleccionUsuarios
              data = {administradores}
              labelId = "sel-administrador-proyecto-label"
              value = {administrador}
              label = "Administrador del proyecto"
              onChange = {handleChangeAdministrador}
              name = "sel-administrador-proyecto"
              id = "sel-administrador-proyecto"
            />
          </div>
          <div className="col mb-2">
            <MenuSeleccionMultiplesUsuarios 
              value = {involucrados}
              onChange = {handleChangeInvolucrados}
              id = "sel-involucrados-proyecto"
              label = "Involucrados (opcional)"
              data = {dataUsuarios.usuarios}

              />
          </div>
      </div>
    </>
  )
}