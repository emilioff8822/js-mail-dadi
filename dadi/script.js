let giocatore = 0;
let computer = 0 ;

const bottone = document.getElementById('generatore')

bottone.addEventListener('click' , function(){

  let giocatore = Math.floor(Math.random() * 6) + 1;

  let computer = Math.floor(Math.random() * 6) + 1;

  let risultato = document.getElementById("risultato")
  
  
  risultato.innerHTML = "Il giocatore ha lanciato il dado e ha ottenuto: " + giocatore +  "<br>" +

  "Il computer ha lanciato il dado e ha ottenuto: "+ computer + "<br>"

//scelta del vincitore in base al punteggio

if ( giocatore > computer) {

  
 risultato.innerHTML += "Il giocatore vince con un punteggio di: " + giocatore;


}else if (computer > giocatore) {


  risultato.innerHTML += "Il computer vince con un punteggio di: " + computer;

}

else {

  risultato.innerHTML += "Nessun vincitore il risultato e' un pareggio!"
}

})

//reset

const reset = document.getElementById('resetta')

reset.addEventListener('click', function(){

  
})
