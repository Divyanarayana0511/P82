canvas=document.getElementById("Mypaint");
var ctx=canvas.getContext("2d");
var mouseevent="empty";
var colour,line_width,radius;



canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
    colour=document.getElementById("linecolour").value;
    line_width=document.getElementById("line_width").value;
    radius = document.getElementById("radius").value;
    mouseevent="mouseDown";
    console.log(colour, line_width,radius,mouseevent);
}

canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
    var current_x_pos=e.clientX-canvas.offsetLeft;
    var current_y_pos=e.clientY-canvas.offsetTop;
    

    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.lineWidth=line_width;
        ctx.strokeStyle=colour;

        ctx.arc(current_x_pos,current_y_pos,radius,0,Math.PI*2);
        ctx.stroke();
        console.log(`current x pos is ${current_x_pos} and current y pos is ${current_y_pos} `);
    }
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(){
    mouseevent="mouseup";
    console.log(mouseevent);
}
canvas.addEventListener("mouseleave",my_mouseLeave);
function my_mouseLeave(){
    mouseevent="mouseLeave";
    console.log(mouseevent);
}
document.getElementById("mouseevents").innerHTML=`${mouseevent},${line_width} `;

function clearscreen(){
    ctx.rect(0,0,800,600);
}