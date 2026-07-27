// 1. Pegar o botão do HTML e trazer para o JavaScript
const botao = document.getElementById('botao-tema');

// 2. Criar a função que "liga e desliga" o modo escuro
function alternarModoEscuro() {
    // O 'toggle' funciona exatamente como um interruptor:
    // Se a classe não existir, ele coloca. Se já existir, ele tira!
    document.body.classList.toggle('modo-escuro');
  

  // Pergunta direta: O body tem a classe 'modo-escuro' agora?
    if (document.body.classList.contains('modo-escuro')) {
        // Se tem, o site está escuro. O botão deve dizer "Modo Claro"
        botao.textContent = "Modo Claro";
    } else {
        // Se não tem, o site está claro. O botão deve dizer "Modo Escuro"
        botao.textContent = "Modo Escuro";
    }
}


// 3. Ouvir o clique do usuário para ativar a função
botao.addEventListener('click', alternarModoEscuro);