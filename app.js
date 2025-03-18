// Creamos un array vacío para almacenar los nombres de los amigos
let amigos = [];

// Función que se ejecuta al hacer clic en el botón "Añadir"
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();  // Eliminamos espacios innecesarios

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);  // Agregamos el nombre al array de amigos
        mostrarListaAmigos();  // Actualizamos la lista en pantalla
        inputAmigo.value = "";  // Limpiamos el campo de texto
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para mostrar la lista de amigos en el DOM
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";  // Limpiamos la lista actual para evitar duplicados

    const li = document.createElement('li');
    const txtStrong = document.createElement('strong');

    txtStrong.textContent = 'LISTA DE AMIGOS:';
    li.appendChild(txtStrong);
    listaAmigos.appendChild(li);

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificamos que haya amigos en la lista
    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un amigo.");
        return;
    }

    // Seleccionamos un amigo aleatorio del array
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostramos el amigo seleccionado en el contenedor de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>El amigo secreto sorteado es: <strong>${amigoSeleccionado}</strong></p>`;
}
