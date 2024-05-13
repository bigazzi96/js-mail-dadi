
const max = 6

//* NUMERO  CASUALE PER UMANO
const giocatore = Math.floor(Math.random()* max + 1);

//* NUMERO CASUALE PER MACCHINA
const macchina = Math.floor(Math.random()* max + 1);


if (giocatore > macchina){
    vincitore.innerText= ("Il Giocatore ha vinto")
}

else if (giocatore < macchina){
    vincitore.innerText= ("La macchina ha  vinto")
}

const vincitore = document.getElementById("vincitore");

console.log(giocatore,macchina);



