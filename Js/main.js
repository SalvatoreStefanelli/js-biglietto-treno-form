document.getElementById('fullname');
const chilometers = document.getElementById('chilometers');
const age = document.getElementById('age');

const generator = document.getElementById('generator');

generator.addEventListener('click' , function() {
    console.log('clicked', chilometers.value , age.value);
})

// // costo del biglietto
// const priceKm = 0.21;
// const price = priceKm * chilometers;

// // sconto per i minorenni
// const saleYoung = (price * 20) / 100;
// const priceYoung = price - saleYoung;

// // sconto per gli over 65
// const saleSenior = (price * 40) / 100;
// const priceSenior = price - saleSenior;




// // Calcolo del prezzo del biglietto scontato per i minorenni
//  if (age < 18) {
    
//     console.log(priceYoung.toFixed(2));
//     document.getElementById('total_price').innerHTML = priceYoung.toFixed(2);
   

    
// // Calcolo del prezzo del biglietto scontato per gli over 65
//  } else if (age > 65) {
    
//      console.log(priceSenior.toFixed(2));
//      document.getElementById('total_price').innerHTML = priceSenior.toFixed(2);

// //  Calcolo del prezzo del biglietto tra i 18 e i 65 anni
//  } else {
    
//      console.log(price.toFixed(2));
//      document.getElementById('total_price').innerHTML = price.toFixed(2);
//  }


 

