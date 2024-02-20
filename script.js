//definizione
let nomeInventato1;
var nomeInvetato2;

//assegnamento
nomeInventato1 = "paolo";
nomeInvetato2 = 5;

//inizializzazione = definizion + assegnamento (in una unica riga)
const altroNomeInventato = "hello world"; 

// ********** inizio **********

const numKm =prompt ('Quanti km vuoi percorrere?');
console.log (numKm);

const etaPasseggero =prompt ('Quanti anni hai? ');
console.log (etaPasseggero);

const prezzoPerKm = 0.21

const prezzoTotale = numKm * prezzoPerKm
console.log (prezzoTotale)

// let message = '';


if(etaPasseggero < 18){
  message = 'Utente minorenne ha sconto 20%'
}else if (etaPasseggero > 65){
  message = 'Utente senior ha sconto 40%'
}else{
  message = 'utente non ha sconto'
}

document.getElementById('output').innerHTML = message;