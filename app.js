// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoSecreto = [];

function agregarAmigos() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, digite un nombre");
    return;
  }

  amigoSecreto.push(nombreAmigo);

  actualizarLista();
  inputAmigo.value = "";
  inputAmigo.focus();
}

function actualizarLista() {
  const listaAmigoUl = document.getElementById("listaAmigos");
  listaAmigoUl.innerHTML = "";

  amigoSecreto.forEach((amigoSecreto) => {
    const li = document.createElement("li");
    li.textContent = amigoSecreto;
    listaAmigoUl.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigoSecreto.length === 0) {
    alert("No hay amigos para sortear. Agregar primero un nombre");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
  const amigoSorteado = amigoSecreto[indiceAleatorio];
  const resultadoUl = document.getElementById("resultado");
  resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;

}

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigos)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
    
  });

