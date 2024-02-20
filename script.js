const numKm =prompt ('Quanti km vuoi percorrere?');
console.log (numKm);

const age =prompt ('Quanti anni hai? ');
console.log (age);

const prezzoPerKm = 0.21
let prezzoTotale = distanza * prezzoPerKm

let message = '';

if(userAge < 18){
  message = 'Utente minorenne ha sconto 20%'
}else if (userAge > 65){
  message = 'Utente senior ha sconto 40%'
}else{
  message = 'utente non ha sconto'
}

document.getElementById('output').innerHTML = message;