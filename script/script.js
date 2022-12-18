const cords = {
    x:0,y:0
};
const cursers = document.querySelectorAll(".curser");

const colors = [
    "#0088ff",
    "#2499ff",
    "#42a7ff",
    "#57acf7",
    "#78c0ff",
    "#94cdff",
    "#b6dbfc",
    "#d4e9fc",
    "#edf4fa"
];

cursers.forEach(function(curser,index){
    curser.x = 0;
    curser.y = 0;
    curser.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
    cords.x = e.clientX;
    cords.y = e.clientY;

});

function animateCursers(){
    let x = cords.x;
    let y = cords.y;

    cursers.forEach(function(curser,index){
        curser.style.left = x - 12 + "px";
        curser.style.top = y - 12 + "px";
        curser.style.scale = (cursers.length - index) / cursers.length;

        curser.x = x;
        curser.y = y;

        const nextCurser = cursers[index + 1] || cursers[0];
        x += (nextCurser.x -x)* 0.3;
        y += (nextCurser.y -y)* 0.3;
    });

    requestAnimationFrame(animateCursers);
}

animateCursers();