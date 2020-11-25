import "./styles.css";

document.getElementById("app").innerHTML = `

`;
// Sirve para consumir appi
//respuesta del servidor que nos vamos apoder sonsumir datos

//API publica de Pokemon

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json()) //then espera una promesa RES es la respuesta Despues de la flecha es qel retornar en forma de json
  .then((data) => {
    //data es el parametro
    console.log(data.results);
    data.results.forEach((element) => {
      //el data.results se reccorre con el forech
      console.log(element.name);
    });
  });
// nos muestra una array de objetos
