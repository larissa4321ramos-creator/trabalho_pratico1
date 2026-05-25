fetch("data/dados.json")

.then(response=>response.json())

.then(dados=>{

document.querySelector(".sub")

.innerHTML=

dados.hero.subtitulo;

document.querySelector(".titulo")

.innerHTML=

dados.hero.titulo.replace(

"MUSCULAÇÃO",

"<span>MUSCULAÇÃO</span>"

);

document.querySelector(".texto")

.innerHTML=

dados.hero.descricao;

/* MENU */

let menu="";

dados.menu.forEach(item=>{

menu+=`

<li class="nav-item">

<a class="nav-link">

${item}

</a>

</li>

`;

});

document.getElementById("menuLista")

.innerHTML=menu;

/* CARDS */

let cards="";

dados.estatisticas.forEach(card=>{

cards+=`

<div class="col-md-3">

<div class="card-stat">

<h2>

${card.valor}

</h2>

<p>

${card.titulo}

</p>

</div>

</div>

`;

});

document.getElementById("cards")

.innerHTML=cards;

});