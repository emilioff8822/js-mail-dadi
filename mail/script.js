const emailAutorizzate = ['emilioff@hotmail.it', 'francesca@hotmail.it',
'luigi@hotmail.it'
];

const emailUtente = prompt('Inserisci la tua mail');

const mess = document.getElementById('messaggio');

if (emailAutorizzate.includes(emailUtente)){
mess.innerHTML= 'ACCESSO  AUTORIZZATO'
mess.classList.add('ok')
//mess.style = "color : blue"
}

else {
  mess.innerHTML = 'ACCESSO NON AUTORIZZATO';
  mess.classList.add('no')
}