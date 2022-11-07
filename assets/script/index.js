


// Utility Functions 
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Select HTML element by class, id and html element
function select(selector, parent = document) {
    return parent.querySelector(selector);
}



const enterNumber = select('.enternumber');
const result = select('.result');
const celcius = document.getElementById('tempC');
const fahrenheit = document.getElementById('tempF')
const output = select('.output p');

onEvent('click', result, () => {

    let a = enterNumber.value;
    if(!isNaN(a)){

    } if (fahrenheit.checked) {
        let toF = a * 1.8 + 32; 
        output.innerText = `${a}C = ${toF.toFixed(2)}F`

    } if (celcius.checked) {
        let toC = (a - 32) * 5 / 9;
        output.innerText = `${a}F = ${toC.toFixed(2)}C`
    } if (isNaN(a)) {
        output.innerText = `Please enter a valid number`
    } if (display.innerText = '');
    output.innerText = `Please enter a number`

});


function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");
 }


  
