import { draw, mouseDown, notDrawing } from "../handlers/draw.js";
import { canvas } from "../data.js";

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", notDrawing);
canvas.addEventListener("mouseout", notDrawing);
