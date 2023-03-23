let emailAutorizzate = ['emilioff@hotmail.it', 'francesca@hotmail.it',
'luigi@hotmail.it'
];

const emailUtente = prompt('Inserisci la tua mail');

const mess = document.getElementById('messaggio');

let accesso = false;
for (let i=0; i < emailAutorizzate.length; i++ ) {
 
  if (emailUtente === emailAutorizzate[i]){

    accesso = true;
    mess.innerHTML= 'ACCESSO  AUTORIZZATO'
    mess.classList.add('ok')
  }

  else{

  mess.innerHTML = 'ACCESSO NON AUTORIZZATO';
  mess.classList.add('no')
  }
}












/*includes

if (emailAutorizzate.includes(emailUtente)){
mess.innerHTML= 'ACCESSO  AUTORIZZATO'
mess.classList.add('ok')
//mess.style = "color : blue"
}

else {
  mess.innerHTML = 'ACCESSO NON AUTORIZZATO';
  mess.classList.add('no')
}

*/