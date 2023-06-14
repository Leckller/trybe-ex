const corpo = document.querySelector('body');
function criaElementos (tag,textoTag, local, classe, src) {
  const tagNova = document.createElement(tag);
  tagNova.innerText = textoTag;
  tagNova.classList = classe;
  tagNova.src = src;
  local.appendChild(tagNova);
}
criaElementos('main',null, corpo, 'main-content', null)
criaElementos('h1', 'TrybeTrip - Agência de Viagens', corpo.lastElementChild, "titulo title",null);
criaElementos('section', null, corpo.lastElementChild, 'center-content',null)
criaElementos('p', 'dom dom dom dom estava aqui no baile escutando aquele som', corpo.lastElementChild.lastElementChild, null, null);
criaElementos('section', null, corpo.lastElementChild, 'left-content', null)
criaElementos('section', null, corpo.lastElementChild, 'right-content', null)
criaElementos('img', null, corpo.lastElementChild.lastElementChild.previousElementSibling, 'small-image piquititico', 'https://brasildelonge.files.wordpress.com/2016/09/bandeira-brasil-2a.jpg')
criaElementos('ul', null, corpo.lastElementChild.lastElementChild, null, null)
for(let i = 0; i < 10; i += 1){
  const numerosExtensos = 'Um Dois Três Quatro Cinco Seis Sete Oito Nove Dez'.split(' ')
  criaElementos('li', numerosExtensos[i], corpo.lastElementChild.lastElementChild.firstElementChild, null, null)
}
for(let i = 1; i<=3; i+=1){
  criaElementos('h3', i, corpo.lastElementChild, 'title',null)
}