canvas.addEventListener(mousdown,my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value; 

MouseEvent="mousedown";
}
canvas.addEventListener(mouseup,my_mouseup);
function my_mouseup(e)
{
MouseEvent="mouseup";
}
canvas.addEventListener(mouseleave,my_mouseleave);
function my_mouseleave(e)
{
MouseEvent="mouseleave";
}
canvas.addEventListener(mousemove,my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.ofsetLeft;
current_position_of_mouse_y=e.clientY-canvas.ofsetTop;

if (mouseEvent=="mouseDown"){
ctx.beginpath();
ctx.strokestyle=color;
ctx.linewidth=width_of_line;

ctx.moveto(last_position_of_x,last_position_of_y)
ctx.moveto(current_position_of_x,current_position_of_y)
}
last_position_of_x=current_position_of_x
last_position_of_y=current_position_of_y
}