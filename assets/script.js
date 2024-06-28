const buttonOnOff = document.getElementById('buttonOnOff') ;
const lamp = document.getElementById('lamp');

function verifcLampada () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOff () {
    if (!verifcLampada ()) {
        lamp.src = 'assets/img/desligada.jpg';
    }
}
function lampOn () {
    if (!verifcLampada ()) {
        lamp.src = 'assets/img/ligada.jpg';
    }
}

function lampBroken () {
    lamp.src = 'assets/img/quebrada.jpg';
}

function lampOnoff () {
    if (buttonOnOff.textContent == 'Ligar') {
        lampOn();
        buttonOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        buttonOnOff.textContent = 'Ligar';
    }
}


buttonOnOff.addEventListener('click', lampOnoff);

lamp.addEventListener('mouseover', lampOn);

lamp.addEventListener('mouseleave', lampOff);

lamp.addEventListener('dblclick', lampBroken);