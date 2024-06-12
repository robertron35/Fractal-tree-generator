var t = 600;
var angle = 0;

function setup() {
    createCanvas(t, t);
    slider = createSlider(0, TWO_PI, PI/4, 0.005);
    slider.style('width', t-3 + 'px')
}

function draw() {
    background('hsla(240, 23%, 38%, 1)');
    angle = slider.value();
    translate(t/2, height);
    stroke('hsla(38, 81%, 62%, 1)');
    branch(t/4);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 4){
        push();
        rotate(angle);
        stroke('hsla(38, 81%, 62%, 1)');
        branch(len*0.67);
        pop();
        push();
        rotate(-angle);
        stroke('hsl(160, 100%, 50%)');
        branch(len*0.67);
        pop();
    }
}