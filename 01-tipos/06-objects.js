let personaje = {
    nombre: "Ricardo",
    apellido: "Otero",
    edad: 42,
    direccion: {
        calle: "Calle 123",
        ciudad: "Bogotá"
    }
};
console.log(personaje);
console.log(personaje.direccion);
console.log(personaje["apellido"]);

personaje.edad = 43;

let llave = "edad";
personaje[llave] = 44;

delete personaje.direccion.ciudad;

console.log(personaje);