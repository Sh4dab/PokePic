const buttonEl=document.querySelector("#btn"),
animeContainerEl=document.querySelector(".img-container"),
animeImgEl=document.querySelector(".anime-img"),
animeNameEl=document.querySelector(".anime-name");

const url="https://pokeapi.co/api/v2/pokemon/";

buttonEl.addEventListener("click",async function(){

    try {
        buttonEl.disabled=true;
        buttonEl.innerText="Loading...";
        animeNameEl.innerText="Updating...";
        animeImgEl.src="icons/spin_icon.svg";
        let id=Math.floor(Math.random()* 150)+1;
        const finalurl= url+id;
        const response=await fetch(finalurl)
        const data= await response.json();
        console.log(data);
        buttonEl.disabled=false;
        buttonEl.innerText="Get Your Pokemon";
        animeContainerEl.style.display="block";
        animeImgEl.src=data.sprites.other.dream_world.front_default;
        animeNameEl.innerText=data.name.toUpperCase();
        
    } catch (error) {
        buttonEl.disabled=false;
        buttonEl.innerText="Get Your Pokemon";
        animeNameEl.innerText="Error!! Please Try Again";
    }

})