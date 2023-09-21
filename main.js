var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}
/*CODIGO AGREGADO POR MI===========================*/ 
//para secante de x
function sec() {
    screen.value = 1 / Math.cos(screen.value);
}
//para seno hiperbólico de x
function sinh() {
    screen.value = Math.sinh(screen.value);
}
//para redondear x al entero más cercano
function roundNum() {
    screen.value = Math.round((screen.value));
}
//para redondea hacia abajo al entero más cercano
function floorNum() {
    screen.value = Math.floor(parseFloat(screen.value));
}
//para redondea hacia arriba al entero más cercano
function ceilNum() {
    screen.value = Math.ceil(parseFloat(screen.value));
}
//para valor absoluto de x
function absNum() {
    screen.value = Math.abs(parseFloat(screen.value));
}
/*============================*/
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}