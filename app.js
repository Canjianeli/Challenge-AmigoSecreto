// Array para armazenar os nomes dos amigos
let amigos = [];

// Função adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar nome
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adicionar nome ao array
    amigos.push(nomeAmigo);

    // Limpar campo de entrada
    inputAmigo.value = '';

    // Atualizar lista de nomes na página
    atualizarListaAmigos();
}

// Função atualizar lista de nomes na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpar a lista antes de atualizar

    // Adicionar nome à lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Sortear nome aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibir resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;

    // Limpar a lista de nomes
    amigos = [];
    atualizarListaAmigos();
}