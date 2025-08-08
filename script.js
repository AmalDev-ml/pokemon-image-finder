let search = document.getElementById("name");
let btn = document.getElementById("submit");
let pokeImg = document.getElementById("pokeImg");

btn.addEventListener("click",()=>{
  conn(search.value.toLowerCase());
});




async function conn(name) {
  try{
    
    const link = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res= await fetch(link);
    if(!res.ok){
      throw new Error("CANT FETCH DATA");
    }
    const data = await res.json();
    // console.log(data.types[0].type.name);
    pokeImg.src=`${data.sprites.front_default}`;


  }
  catch(err){
    console.error (err);
  }
}