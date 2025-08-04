// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
let amigos = [];

function agregarAmigo() {
  // Valimdamos la entrada del input
  if (amigo.value !== "") {
    // Agregamos al array el nombre ingresado en el input
    amigos.push(amigo.value);
    // Creamos un elemento "li" donde agregaremos el nombre ingresado
    let li = document.createElement("li");
    // Asignamos el valor al elemento "li"
    li.innerHTML = amigo.value;
    // Agregamos el "li" dentro del "ul"
    listaAmigos.appendChild(li);
    // Limpiamos el input para ingresar nuevos nombres
    amigo.value = "";
  } else {
    // Mensaje para mostrar si el input esta vacio
    alert("No se ingreso un nombre!");
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    //Limpiamos el resultado en caso de multiples intentos
    resultado.innerHTML = "";
    // Seleccionamos al azar un amigo del array de amigos
    let num = Math.floor(Math.random() * amigos.length);
    // Mostramos la eleccion
    resultado.innerHTML = amigos[num];
  } else {
    // Mensaje para mostrar si el array esta vacio
    alert("Debe agregar amigos antes de sortear!");
  }
}
