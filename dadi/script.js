//genero un numero casuale da 1 a 6 per giocatore e computer

let giocatore = Math.floor(Math.random() * 6) + 1;

let computer = Math.floor(Math.random() * 6) + 1;

// vedo in console i punteggi ottenuti

console.log ("Il giocatore ha ottenuto un punteggio di " +  giocatore)

console.log ("Il computer ha ottenuto un punteggio di " +  computer)

if ( giocatore > computer) {

  
  console.log("Il giocatore ha vinto con un punteggio di " )


}else if (computer > giocatore) {


  console.log("Il computer ha vinto")

}

else {
  console.log ("Nessun Vincitore , Pareggio")
}
