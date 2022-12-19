// add cards -----------
const botaoAdicionar = document.querySelector('.botao-add')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  // pegando o valor o novo conteudo
  const form = document.querySelector('.form-adiciona')
  const conteudo = form.texto.value

  // novo card
  const novoCard = document.createElement('div')
  const novoConteudo = document.createElement('div')
  novoCard.classList.add('card') //add class
  novoCard.classList.add('is-dragging') //add class css
  novoCard.setAttribute('draggable', true) //add atribute

  novoConteudo.textContent = conteudo

  novoCard.appendChild(novoConteudo)

  const board = document.querySelector('.dropzone')

  board.appendChild(novoCard)
})
