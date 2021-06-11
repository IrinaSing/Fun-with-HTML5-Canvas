let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

export const draw = (e) => {
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    
    if(hue >= 360) {
      hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }
    if (direction) {
      ctx.lineWidth++;
    } else {
      ctx.lineWidth--;
    }
    
  }


export const mouseDown = (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

export const notDrawing = () => {
    isDrawing = false;
}