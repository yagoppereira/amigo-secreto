// Variável para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar nome à lista
function adicionarAmigo() {
    const nomeAmigo = document.getElementById("amigo").value.trim();  // Obtém o valor do campo de entrada

    if (nomeAmigo === "") {  // Verifica se o campo está vazio
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Verifica se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return;
    }

    amigos.push(nomeAmigo);  // Adiciona o nome à lista de amigos
    atualizarLista();  // Atualiza a lista na tela
    document.getElementById("amigo").value = ""; // Limpa o campo de entrada
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");  // Pega o elemento de lista
    lista.innerHTML = "";  // Limpa a lista antes de atualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");  // Cria um item de lista (li)
        li.textContent = amigo;  // Adiciona o nome do amigo ao item
        lista.appendChild(li);  // Adiciona o item na lista
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {  // Verifica se há pelo menos 2 amigos para o sorteio
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const sorteioResultado = document.getElementById("resultado");  // Pega o elemento para mostrar o resultado
    sorteioResultado.innerHTML = "";  // Limpa os resultados anteriores

    // Cria uma cópia da lista de amigos e embaralha ela
    const amigosDisponiveis = [...amigos];
    let resultadoSorteio = [];

    // Embaralha a lista de amigos para garantir sorteio aleatório
    while (amigosDisponiveis.length > 0) {
        const indexSorteado = Math.floor(Math.random() * amigosDisponiveis.length);
        const amigoSorteado = amigosDisponiveis.splice(indexSorteado, 1)[0];
        resultadoSorteio.push(amigoSorteado);
    }

    // Cria o resultado final do sorteio garantindo que ninguém sorteie a si mesmo
    let finalResultado = [];
    for (let i = 0; i < amigos.length; i++) {
        let sorteado = resultadoSorteio[i];

        // Se a pessoa sorteou a si mesma, troca com o próximo amigo da lista
        if (amigos[i] === sorteado) {
            // Troca com outro amigo que não tenha sido sorteado ainda
            for (let j = 0; j < amigos.length; j++) {
                if (amigos[j] !== amigos[i] && !finalResultado.some(item => item.amigoSorteado === amigos[j])) {
                    sorteado = amigos[j];
                    break;
                }
            }
        }

        // Adiciona o resultado final, não permitindo repetição
        finalResultado.push({ quemSorteou: amigos[i], amigoSorteado: sorteado });
    }

    // Exibe o resultado do sorteio na tela
    finalResultado.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `${result.quemSorteou} tirou ${result.amigoSorteado}`;
        sorteioResultado.appendChild(li);
    });
}

// Adicionando o event listener para o botão "Adicionar"
document.addEventListener("DOMContentLoaded", function() {
    const btnAdicionar = document.querySelector(".button-add");  // Seleciona o botão de adicionar
    btnAdicionar.addEventListener("click", adicionarAmigo);  // Adiciona o evento de clique no botão
});