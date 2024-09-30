import {data} from '../../data/tooltips.json';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import iconoAyuda from "../../assets/svg/informacion.svg";

export default function TooltipA(propiedades) {
    const tooltip = data.find(tooltip => tooltip.id === propiedades.id);
    return (
        <>
            <Tooltip title={tooltip !== undefined ? tooltip.descripcion : "no se encontró el mensaje."}>
                <IconButton>
                    <img src={iconoAyuda} alt="Ayuda" width={15}/>
                </IconButton>
            </Tooltip>
        </>
    )
}

export function TooltipB(propiedades) {
    const tooltip = data.find(tooltip => tooltip.id === propiedades.id);
    return (
        <>
            <Tooltip title={tooltip !== undefined ? tooltip.descripcion : "no se encontró el mensaje."}>
                <IconButton>
                    <img src={propiedades.src} alt={propiedades.alt} width={15}/>
                </IconButton>
            </Tooltip>
        </>
    )
}