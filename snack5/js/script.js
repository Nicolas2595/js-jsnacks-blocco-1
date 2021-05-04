/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console.
*/

// Creare un array vuoto
var arrayVuoto = [];

// Chiedere per 6 volte all'utente di inserire un numero e fare il .push nell'array vuoto

for (var i = 0; i < 6; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    console.log(numeroUtente);

    if (pari(numeroUtente)) {
        arrayVuoto.push(numeroUtente);
    }
}
console.log(arrayVuoto);

// Funzione
function pari (num) {
    if (num % 2 == 0) {
        return false;
    } else {
        return true;
    } 
}