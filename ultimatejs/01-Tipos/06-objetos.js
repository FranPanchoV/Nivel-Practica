// Personaje real
let nombre = "Pancho";
let anime = "Spirit"
let edad = 46;

let personaje = {
    nombre: "Pancho",
    anime: "Spirit",
    edad: 46,
};
console.log(personaje);
console.log(personaje.anime);
console.log(personaje['edad']);


personaje.edad = 25;

personaje['edad'] = 25;

let llave = 'edad';
personaje[llave] = 25;

delete personaje.edad;
console.log(personaje)

