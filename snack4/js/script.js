/*
Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.
*/

// Lista Nomi

var nomi = ["Marco", "Paolo", "Ferdinando", "Rodolfo"];
console.log(nomi);

// Lista cognomi

var cognomi = ["Rossi", "Bianchi", "Neri", "Gialli"];
console.log(cognomi);

// Falsa lista da stampare in pagina

for (var i = 0; i < 10; i++) {
    document.getElementById("lista_invitati").innerHTML += "<li> " + nominativoRandom(nomi, cognomi) + "</li>";
}

// Funzione che genera una lista di nome-cognome casuale

function nominativoRandom (nome, cognome,) {
  
    var n = nome[Math.floor(Math.random() * nome.length)];
    var c = cognome[Math.floor(Math.random() * cognome.length)];

    console.log(n, c);
    
    return n + " " + c;
}

