// async function fetchPokemon(i){
//     let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//     let data = await resp.json();
//     console.log(data);
// }

// async function fetchAPi(){
//     for(let i = 1; i<=; i++){
//         let pokemon = await fetchPokemon(i);
//     }
// }
// fetchAPi()



// async function fetchPokemon (i) {
//     let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
//     let data = await resp.json();
//     console.log(data);
// }

// async function fetchmainpage(){
//     for(let i = 1; i<=150; i++){
//         let pokemon = await fetchPokemon(i);
//     }
// }
// fetchmainpage()


let cardContainer = document.querySelector("#cards-container");

let searching = document.querySelector("#search");
let searchBtn = document.querySelector("#searchBtn");

let filterBtn = document.querySelector("#filter");

let select = document.querySelector("#select");
let types = document.querySelector("#type");
console.log(select, types);





// console.log(searching.value);




let colors = {
    grass: 'green',
    fire:'red',
    water: 'blue',
    bug: 'yellow',
    normal : 'gray',
    poison : 'black',
    ice: 'purple',
    electric: `#87CEEB`,

    ground: 'pink',
    fairy : `brown`,
    fighting: '',

    physic: 'purple',
    rock: 'yellow',
    ghost: 'purple',
    dragon: 'purple',
   
    psychic: '',
    
   
}





function creatCard(details){
    let card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
    <div id="inner" class="bg-red-600 flex flex-col justify-center items-center p-10 rounded-3xl shadow-xl">
        <img src="${details.sprites.front_default}" class="w-[200px]">
        <p class="text-center w-[360px] text-xl text-white">name
        <h1 class="text-2xl font-bold text-white">${details.name}</h1>
        <h2 class="">${details.types[0].type.name}</h2>     
    </div>`


    card.querySelector("#inner").style.backgroundColor= colors[details.types[0].type.name]
    return card;
    
}



function filterByType(type) {
    let allCards = document.querySelectorAll(".card");

    allCards.forEach((card) => {
        let pokemonType = card.querySelector("h2").innerText.toLowerCase();

        if (type === "all" || pokemonType === type) {
            card.style.display = "block";
        } else {
            card.style.display = "none"; 
        }
    });
}
filterBtn.addEventListener("click", () => {
    let selectedType = types.value.toLowerCase(); 
    filterByType(selectedType);
});


searchBtn.addEventListener('click', () => {
    let allCards = document.querySelectorAll(".card");

    let searchValue = searching.value.toLowerCase(); 

    allCards.forEach((card) => {
        let pokemonName = card.querySelector("h1").innerText.toLowerCase(); 

        if (pokemonName.includes(searchValue)) {
            card.style.display = "block"; 
        } else {
            card.style.display = "none"; 
        }
    });
});


async function fetchPokemon(i) {
    let resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await resp.json();
    // console.log(data);
    let card = creatCard(data);
    cardContainer.appendChild(card);

}


async function fetchAPI() {
    let resp = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let data = await resp.json();
    // let totalCount = data.count;
    for (let i = 1; i <= 1024; i++) {
         await fetchPokemon(i);
    }
}

fetchAPI();





