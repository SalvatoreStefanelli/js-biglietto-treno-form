// DOM elements
const fullname = document.getElementById('fullname');
const chilometers = document.getElementById('chilometers');
const age = document.getElementById('age');

const generator = document.getElementById('generator');
const cancel = document.getElementById('cancel');

//  costo del biglietto
const priceKm = 0.21;

// add Event Listener
generator.addEventListener('click' , function() {
//console.log('clicked', chilometers.value , age.value);

const name = fullname.value
const sale20 = ('SCONTO DEL 20%');
const sale40 = ('SCONTO DEL 40%');
const standard = ('BIGLIETTO STANDARD');
const km = chilometers.value;
const age_user = age.value;
const carriage = Math.floor(Math.random() * 8) + 1;
//const codeCP = Math.floor(Math.random() * 9999) + 10000;
const codeCP = Math.floor(Math.random() * 89999) + 10000;
console.log(codeCP);

//console.log(km , age_user);

const price = km * priceKm;
//console.log(price);

if (age_user < 18) {
    //  sconto per i minorenni
const saleYoung = (price * 20) / 100;
const priceYoung = price - saleYoung;
console.log(priceYoung.toFixed(2));

document.getElementById('name').innerHTML = name; 
document.getElementById('sale').innerHTML = sale20;
document.getElementById('carriage').innerHTML = carriage;
document.getElementById('codeCP').innerHTML = codeCP;
document.getElementById('price').innerHTML = ' € ' +  priceYoung.toFixed(2);


} else if (age_user > 65) {
//      sconto per gli over 65
const saleSenior = (price * 40) / 100;
const priceSenior = price - saleSenior;
console.log(priceSenior.toFixed(2));

document.getElementById('name').innerHTML = name; 
document.getElementById('sale').innerHTML = sale40;
document.getElementById('carriage').innerHTML = carriage;
document.getElementById('codeCP').innerHTML = codeCP;
document.getElementById('price').innerHTML = ' € ' + priceSenior.toFixed(2);


// Calcolo del prezzo del biglietto tra i 18 e i 65 anni
} else {
console.log(price.toFixed(2));

document.getElementById('name').innerHTML = name; 
document.getElementById('sale').innerHTML = standard;
document.getElementById('carriage').innerHTML = carriage;
document.getElementById('codeCP').innerHTML = codeCP;
document.getElementById('price').innerHTML = ' € ' + price.toFixed(2);
}
document.getElementById('ticket').classList.remove('d-none');
})


document.querySelector('form').addEventListener('submit', function(e) {
    console.log('form submitted');
    e.preventDefault();
})

// add Event Listener
generator.addEventListener('click' , function() {
return
}



