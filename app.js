//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim(); // Corrigido o ID do input
    if (nomeAmigo) {
        amigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById('amigo').value = ''; // Limpa o campo de input
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Atualiza a lista de amigos no HTML
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Realiza o sorteio de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos antes de sortear.');
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];

let resultado = document.getElementById("resultado");
    resultado.innerHTML = `A pessoa sorteada foi": ${amigoSorteado}`;

    confetti({
        particleCount: 250,
        spread: 70,
        origin: { y: 0.6 }
      });
    
    setTimeout(() => {
        resultado.innerHTML = '';
    }, 5000);
}