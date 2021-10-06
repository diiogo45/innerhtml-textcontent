// SELECIONAR O ELEMENTO


var title = document.querySelector('#title');
console.log(title);

// INNERHTML
title.innerHTML = "Esse texto foi alterado com sucesso";

// TEXTCONTENT - MAIS UTILIZADO

var subtitle = document.querySelector('.subtitle');

console.log(subtitle);

subtitle.textContent = "Testando o texcontent";


var subtitle2 = document.querySelector('.subtitle2');

console.log(subtitle2);

subtitle2.textContent = "Novo Título de tercerização";