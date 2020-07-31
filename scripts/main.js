let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/flamengo-logo-escudo-novo-1.png') {
      minhaImagem.setAttribute ('src','imagens/download.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/flamengo-logo-escudo-novo-1.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Por favor, digite seu nome.');
    localStorage.setItem('nome', meuNome);
    meuCabecalho.textContent = 'União Flasco meu parceiro, ' + meuNome;
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'União Flasco meu parceiro, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }