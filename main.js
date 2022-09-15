const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
  card.addEventListener('dragstart', dragstar)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})
