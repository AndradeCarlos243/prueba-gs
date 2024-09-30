const AlertaEliminarEtapa = (propiedades) => {
  const handleEliminarEtapa = () => {
    propiedades.eliminarEtapa(propiedades.etapa.id);
  };

  return (
    <>
      <div className="row row-cols-1">
        <div className="col my-3 text-center">
          <h3>¿Deseas eliminar la etapa {propiedades.etapa.titulo}</h3>
        </div>
        <div className="col">
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <button onClick={propiedades.onCancel} className="btn-gs-secondary form-control">Cancelar</button>
            </div>
            <div className="col">
              <button onClick={handleEliminarEtapa} className="btn-gs-primary form-control">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertaEliminarEtapa;
