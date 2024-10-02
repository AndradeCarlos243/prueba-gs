import { useState } from "react";
import TextField from '@mui/material/TextField';
import DatePickerGS from './DatePickers/DatePickerGS';
import dayjs from "dayjs";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Tooltip from "../Tooltips/Tooltips";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function FormularioAltaEtapa(propiedades) {
  const [titulo, setTitulo] = useState(propiedades.tipo === "editar" ? propiedades.etapa.titulo : "");
  const [descripcion, setDescripcion] = useState(propiedades.tipo === "editar" ? propiedades.etapa.descripcion : "");
  const [entregable, setEntregable] = useState(propiedades.tipo === "editar" ? propiedades.etapa.entregable : "");
  const [fechaInicio, setFechaInicio] = useState(propiedades.tipo === "editar" ? propiedades.etapa.fechaInicio : dayjs().format("YYYY-MM-DD"));
  const [fechaFin, setFechaFin] = useState(propiedades.tipo === "editar" ? propiedades.etapa.fechaFin : dayjs().format("YYYY-MM-DD"));

  const gsTheme = createTheme({
    select: {
      '&:before': {
          borderColor: 'white',
      },
      '&:after': {
          borderColor: 'white',
      },
      '&:not(.Mui-disabled):hover::before': {
          borderColor: 'white',
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            fontSize: '.5rem',
            textAlign: 'left',
            color: 'black',
            height: '20%',
            '&::-webkit-scrollbar': {
              width: '0.7em',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#febd00',
              BorderRadius: '10px',
            },
            "&& .Mui-selected": {
              backgroundColor: "#ffe390",
              "&:hover": {
                backgroundColor: "#fff4d3",
              },
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            display: 'block',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            containerType: 'inline-size',
            "&:hover": {
              backgroundColor: "#fff4d3",
            }
          },
        },
      },
    },
  });

  function handleTituloChange(e) {
    setTitulo(e.target.value);
  }

  function handleDescripcionChange(e) {
    setDescripcion(e.target.value);
  }

  function handleEntregableChange(e) {
    setEntregable(e.target.value);
  }

  function handleFechaInicioChange(e) {
    setFechaInicio(dayjs(e.$d).format("YYYY-MM-DD"));
  }

  function handleFechaFinChange(e) {
    setFechaFin(dayjs(e.$d).format("YYYY-MM-DD"));
  }

  function handleSubmitAlta(e) {
    e.preventDefault();
    propiedades.anadirEtapa({
      titulo,
      descripcion,
      entregable,
      fechaInicio,
      fechaFin,
    });
    setTitulo("");
    setDescripcion("");
    setEntregable("");    
    setFechaInicio("");
    setFechaFin("");
    propiedades.onCancel();
  }

  function handleSubmitEdicion(e) {
    e.preventDefault();
    const etapaActualizada = {
      id: propiedades.etapa.id,
      titulo,
      descripcion,
      entregable,
      fechaInicio,
      fechaFin,
    };
    propiedades.editarEtapa(etapaActualizada);
  }

  return (
    <>
      <div className="row row-cols-1">
        <div className="col">
          <form onSubmit={propiedades.tipo === "agregar" ? handleSubmitAlta : propiedades.tipo === "editar" ? handleSubmitEdicion : null}>
            <div className="row row-cols-1 mb-2">
              <div className="col mb-2 mt-auto tit-gs">
                <h3>{propiedades.tipo === "agregar" ? "Agregar etapa" : propiedades.tipo === "editar" ? "Editar etapa" : null}</h3>
              </div>
              <div className="col mb-2 mt-auto">
                <p className="form-label">Título de la iniciativa: <span className="text-danger">*</span></p>
                <TextField
                required
                id="txt-titulo"
                label="Titulo"
                value={titulo}
                onChange={handleTituloChange}
                size="small"
                fullWidth
                />
              </div>
              <div className="col mb-2 mt-auto">
                <p className="form-label">Descripción de la etapa: <span className="text-danger">*</span></p>
                <TextField
                required
                id="txt-descripcion"
                name="txt-descripcion"
                itemProp={{
                  id: "id-multilinea"
                }}
                label="Descripción"
                value={descripcion}
                onChange={handleDescripcionChange}
                size="small"
                fullWidth
                multiline
                />
              </div>
              <div className="col mb-2 mt-auto">
                <p className="form-label">Entregable de la etapa: <span className="text-danger">*</span> <Tooltip id="ayu-ent"/></p>
                <FormControl sx={{minWidth: 120 }} size="small" fullWidth>
                  <InputLabel id="entregable-proyecto-label" htmlFor="sel-entregable">Entregable</InputLabel>
                    <ThemeProvider theme={gsTheme}>
                      <Select
                        labelId="entregable-proyecto-label"
                        inputProps={{
                          id: "sel-entregable",
                          name: "sel-entregable",
                        }}
                        value={entregable}
                        label="Entregable"
                        onChange={handleEntregableChange}
                        required
                      >
                        <MenuItem value="">
                          <em>Selecciona un tipo</em>
                        </MenuItem>
                        <MenuItem value="entregable">Entregable</MenuItem>
                        <MenuItem value="no-entregable">No entregable</MenuItem>
                      </Select>
                  </ThemeProvider>
                </FormControl>
              </div>
              <div className="col mb-2 mt-auto">
                <p className="form-label">Fecha de inicio: <span className="text-danger">*</span> <Tooltip id="fec-ini-et"/></p>
                <DatePickerGS 
                  id="fec-inicio"
                  value={fechaInicio}
                  setValue={handleFechaInicioChange}
                  label = "Fecha de inicio"
                />
              </div>
              <div className="col mb-2 mt-auto">
                <p className="form-label">Fecha de fin: <span className="text-danger">*</span> <Tooltip id="fec-fin-et"/></p>
                <DatePickerGS 
                  id="fec-fin"
                  value={fechaFin}
                  setValue={handleFechaFinChange}
                  label = "Fecha de fin"
                />
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 mb-2 mt-auto">
              <div className="col my-2 my-md-0">
                <button 
                  type="button" 
                  onClick={propiedades.onCancel}
                  className="btn-gs-secundary form-control"
                >
                  {propiedades.tipo === "agregar" ? "Cancelar" : propiedades.tipo === "editar" ? "Cancelar" : null}
                </button>
              </div>
              <div className="col my-2 my-md-0">
                <button 
                  type="submit"
                  className="btn-gs-primary form-control"
                >
                  {propiedades.tipo === "agregar" ? "Agregar" : propiedades.tipo === "editar" ? "Modificar" : null} 
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}