const myName = prompt('inserisci nome');
// console.log(myName);

const lastName = prompt('inserisci cognome');
// console.log(lastName);

const myColor = prompt('inserisci colore preferito');
// console.log(myColor);

const password = myName + lastName + myColor + '21'
document.getElementById('password').innerHTML = password
// console.log(password);