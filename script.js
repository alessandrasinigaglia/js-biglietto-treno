// Chiediamo all'utente quanti km vuole percorrere e l'età del passeggero
const km = prompt ("Quanti km vuole percorrere?") 
const age = prompt ("Quanti anni ha il passeggero?")
// Il prezzo del biglietto è definito in base ai km da percorrere (0.21 € al km)
const priceForKm = 0.21;
let price = km * priceForKm;
// Va applicato uno sconto del 20% ai minorenni
if (age <= 18) {
    price -= price * 0.20; // Sottrai il 20% dal prezzo totale
}
else if (age >= 65) {
    price -= price * 0.40; // Sottrai il 40% dal prezzo totale
}

// Output prezzo finale
// Arrotondamento del prezzo a due decimali
price = price.toFixed(2);
alert (`Il prezzo totale del biglietto è: €${price}`);
