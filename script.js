const numKm =prompt ('Quanti km vuoi percorrere?');
console.log (numKm);

const age =prompt ('Quanti anni hai? ');
console.log (age);

const ageUserMinorenne = 17

const ageUserSenior = 65

let message = '';

if(ageUserMinorenne < ageUserSenior){
  message = 'Utente minorenne ha sconto 20%'
}else if (ageUserSenior < 65){
  message = 'Utente senior ha sconto 40%'
}else{
  message = 'utente non ha sconto'
}

document.getElementById('output').innerHTML = message;