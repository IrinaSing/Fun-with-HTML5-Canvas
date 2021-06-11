# Notes

## Canvas

The HTML `canvas` element is used to draw graphics, on the fly, via JavaScript.

The `canvas` element is only a container for graphics. You must use JavaScript to actually draw the graphics.

Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

You draw not on canvas, but on smth called "context" `getContext`

## HSL

[HSL-generator](https://mothereffinghsl.com/)

## Implicit function

A nice way to set an implicit function
`()=>{}`
Example:
`canvas.addEventListener('mousedown', ()=>isDrawing=true);`

## Destructuring assignment

ES6 allows you to easily name multiple variables, demonstrated by the the following code

`[lastX, lastY] = [e.offsetX, e.offsetY];`
