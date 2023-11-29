// DOM elements
document.getElementById('fullname');
const chilometers = document.getElementById('chilometers');
const age = document.getElementById('age');

const generator = document.getElementById('generator');

//  costo del biglietto
const priceKm = 0.21;

// add Event Listener
generator.addEventListener('click' , function() {
//console.log('clicked', chilometers.value , age.value);

const km = chilometers.value;
const age_user = age.value;
//console.log(km , age_user);

const price = km * priceKm;
//console.log(price);

if (age_user < 18) {
    //  sconto per i minorenni
const saleYoung = (price * 20) / 100;
const priceYoung = price - saleYoung;
console.log(priceYoung.toFixed(2));
document.getElementById('ticket').innerHTML = 'IL TUO BIGLIETTO È DI' + ' € ' +  priceYoung.toFixed(2);


} else if (age_user > 65) {
//      sconto per gli over 65
const saleSenior = (price * 40) / 100;
const priceSenior = price - saleSenior;
console.log(priceSenior.toFixed(2));
document.getElementById('ticket').innerHTML = 'IL TUO BIGLIETTO È DI' + ' € ' + priceSenior.toFixed(2);


// Calcolo del prezzo del biglietto tra i 18 e i 65 anni
} else {
console.log(price.toFixed(2));
document.getElementById('ticket').innerHTML = 'IL TUO BIGLIETTO È DI' + ' € ' + price.toFixed(2);
}
})

document.querySelector('form').addEventListener('submit', function(e) {
    console.log('form submitted');
    e.preventDefault();
})
