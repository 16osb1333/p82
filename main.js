canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseevent="mouse_down";
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius = document.getElementById("radius").value;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouse_up";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouse_leave";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){


    var current_x=e.clientX-canvas.offsetLeft;
    var current_y=e.clientY-canvas.offsetTop;

    if (mouseevent=="mouseDown") 
    console.log("Current postion of x and y coordinates = ");
    console.log("x =" + current_postion_of_mouse_x +"y =" + current_postion_of_mouse_y)
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth= width_of_line;
    ctx.arc(current_postion_of_mouse_x,current_postion_of_mouse_y,radius,0,
   2 * Math.PI);
     ctx.stroke();
    }