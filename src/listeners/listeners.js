import { draw, mouseDown, notDrawing} from "../handlers/draw.js";

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', notDrawing);
canvas.addEventListener('mouseout', notDrawing);

