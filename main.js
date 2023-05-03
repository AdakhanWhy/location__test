let x = document.querySelector('.x');
let y = document.querySelector('.y');
let loc = document.querySelector('p');


x.oninput = function() {
    handleInpX(x.value)
}

y.oninput = function() {
    handleInpY(y.value)
}

function handleInpX(x) {
    loc.style.marginLeft = `${235 + (+x)}px`
}

function handleInpY(y) {
    loc.style.marginTop = `${235 - (+y)}px`
}