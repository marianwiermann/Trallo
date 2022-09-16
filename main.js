// app -----------
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// cards -----------
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  // console.log('> card: Star dragging')
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
}

function drag() {
  // console.log('> card: Is dragging')
}

function dragend() {
  // console.log('> card: Stop dragging')
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

// dropzone -----------
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  // console.log('> dropzone: Enter in zone')
}

function dragover() {
  // console.log('> dropzone: Over')
  this.classList.add('over')
}

function dragleave() {
  // console.log('> dropzone: Leave')
  this.classList.remove('over')
}

function drop() {}
