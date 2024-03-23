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
    grass: 'pink',
    fire:'#CE9FFC',
    water: '#008cff',
    bug: '#ffcd4a',
    normal : '#28C76F',
    poison : '#130CB7',
    ice: 'purple',
    electric: `#87CEEB`,
    ground: '#E80505',
    fairy : `brown`,
    fighting: '#d56912',
    physic: '#F067B4    ',
    rock: 'yellow',
    ghost: '#002536',
    dragon: '#f70054',
    psychic: '#bfa032',

}

function creatCard(details){
    let card = document.createElement('div');
    card.classList.add('card');
    
    card.innerHTML = `
    <div id="inner" class="flex flex-col justify-center items-center  rounded-3xl shadow-xl cursor-pointer pb-[0px] animate__animated animate__fadeIn border-solid border-black border-[3px] ">

        <div class="flex text-xl rounded-b-2xl leading-[2.75rem] justify-center">
            <div class="flex flex-col">
                <div class="bg-black w-[35px] h-[40px] rounded-b-lg ml-[20px]">
                    <p class=" text-white text-center font-[800] text-[16px]">#${details.id}
                </div>
                
                <div class="flex justify-items-center justify-center">
                    <img src="${details.sprites.other.home.front_default}" class="w-[160px] hover:animate-bounce cursor-pointer filter drop-shadow-3xl ">
                </div>
                


                <div class=" mx-[40px]">
                     <h2 id="poke-type" class="text-center font-[800] text-black text-[14px]  ">Type: ${details.types[0].type.name}</h2>
                </div>

                <div class="flex flex-col mb-[10px] ">
                    <h1 id="pokemon-name" class="font-[800] text-center bg-warn-white text-black">Name: ${details.name}</h1>  
                <div>  

                <div class="flex justify-between gap-[20px] bg-red w-[209px] mb-[10px] p-[10px]">
                    <span class="font-[800]  text-sm/[16px] text-white">height: ${details.height}</span>
                    <span class="font-[800] text-sm/[16px] text-white">width: ${details.weight}</span>
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
        let pokemonType = card.querySelector("h1").innerText.toLowerCase();

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
        let pokemonName = card.querySelector("h2").innerText.toLowerCase(); 

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





