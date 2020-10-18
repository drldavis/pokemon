

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/"

let pokemon = "pikachu";


document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener("keydown", event => {
        // console.log(event)
        // event.preventDefault();
        if (event.keyCode == 13) submitHandler(event)
    })
})



    async function submitHandler(event) {
        event.preventDefault();
    
        try {
            pokemon =  document.getElementById("pokemonSearch").value 

            let result = await fetch(`${POKEMON_API_URL}${pokemon}`)
            
            if (!result.ok) throw("400 error");
            // Hide pending information

            document.getElementById("errorDiv").innerHTML = "";

            result = await result.json();

        

            
    
            console.log(result)
    
            let pokemonAbilities = result.abilities;
            let weight = result.weight;
            let height = result.height;
            
            let pokemonFrontSpriteURL = result.sprites.front_default;
             
            let spriteImg = `<img src="${pokemonFrontSpriteURL}" />`
            // debugger;
            document.getElementById("spriteDiv").innerHTML = spriteImg;

            // debugger;
    
    
            let abilityDiv = `<h3>Abilities</h3>`
    
            pokemonAbilities.forEach(item => {

                // console.log("Ability:", ability);
    
                abilityDiv += `<h4>${item.ability.name}</h4>`
    
            })
    
            document.getElementById("abilityDiv").innerHTML = abilityDiv;

            let detailsDiv = `<h3>Details</h3>`
            detailsDiv += `<h4>Weight: ${weight}</h4>`
            detailsDiv += `<h4>Height: ${height}</h4>`

            document.getElementById("detailsDiv").innerHTML = detailsDiv;

            let movesDiv = `<h3>Moves</h3>`
            movesDiv += `<div class="row">`
            let moves = result.moves
            moves.forEach(item => {
                moveName = item.move.name
                movesDiv += `<div class="col-sm-3">
                    <div class="card px-2 py-1"><h6>${moveName}</h6></div>
                </div>`
            })
            movesDiv += `</div>`

            document.getElementById("movesDiv").innerHTML = movesDiv

        }
        catch(error) {
            console.error(error)
            document.getElementById("errorDiv").innerHTML = "<h1>Error</h1>"

        }
    }






