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




let colors = {
    grass: '#38ba00',
    fire:'red',
    water: '#008cff',
    bug: '#ffcd4a',
    normal : 'gray',
    poison : 'black',
    ice: 'purple',
    electric: `#87CEEB`,
    ground: '#ff0f6e',
    fairy : `brown`,
    fighting: '#d56912',
    physic: '#8a1080',
    rock: 'yellow',
    ghost: '#002536',
    dragon: '#f70054',
   
    psychic: '#bfa032',
    
   
}

function creatCard(details){
    let card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
    <div id="inner" class="bg-red-600 flex flex-col justify-center items-center  rounded-3xl shadow-xl cursor-pointer pb-[0px] animate__animated animate__fadeIn">

    
         <img src="${details.sprites.front_default}" class="w-[200px] hover:animate-bounce cursor-pointer">
         
         
        <div class="bg-[url('./images/bgcircle.png')] bg-cover h-[150px]  ">
            <div class="w-[291px]">
                <p class="text-center bg-black w-[90px] text-xl text-white  mx-[100px] rounded-[19px]">${details.id}
                <h1 class="text-2xl font-bold text-black text-center bg-warn-white rounded-lg mt-[14px]  mx-[50px]">${details.name}</h1>
                <div id="heading2" class="bg-light-yellow ">
                <h2 class="text-center text-black font-bold mt-[10px] b">Type: ${details.types[0].type.name}</h2> 
                </div>

                <div class="flex justify-center gap-[10px] bg-warn-white"> 
                    <span class="text-black font-bold">Abilities: ${details.abilities[0].ability.name} </span>   
                </div>

                <div class="flex justify-center gap-[10px]  mb-[15px] bg-red"> 
                    <span class=" font-bold">Height: ${details.height}</span>   
                    <span class=" font-bold">Weigth: ${details.weight}</span>   
                </div>
            </div>
             
            
        </div>  
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
    console.log(data);
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





