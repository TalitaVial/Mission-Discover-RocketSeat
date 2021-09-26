import Modal from './modal.js'

const modal = Modal()
//pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

//pegar o click no marcar como lido
checkButtons.forEach(button => {
  //adicionar a escuta de eventos
  button.addEventListener('click', event => {
    //abrir a modal
    modal.open()
  })
})

const deleteButton = document.querySelectorAll('.actions .delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
  })
})
