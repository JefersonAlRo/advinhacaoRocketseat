//variáveis
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

//Eventos
btnTry.addEventListener('click', handleTryClick) //funcao como referencia
btnReset.addEventListener('click', handleResetClick)

//função callback
function handleTryClick(event) {
  event.preventDefault() //por padrão, um  botão tem a tarefa de enviar o formulario, recarregando a pagina. Para evitar isso, usamos um preventDefault que evita a tarefa padrão daquele item
  const inputNumber = document.querySelector('#inputNumber')
  if (Number(inputNumber.value) == randomNumber) {
    //vai pegar o numero do inputNumber e comparar com o numero aleatorio criado, caso sejam iguais, entram no IF
    screen1.classList.add('hide') //adicionará o hide a classe screen1
    screen2.classList.remove('hide') //removerá o hide da classe screen2
    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${attempts} tentativas`
  }
  inputNumber.value = ''
  attempts++
}
function handleResetClick(event) {
  toggleScreen()
  attempts = 1
}
function toggleScreen() {
  //função para dar toggle nas telas, sem precisar de add e remove
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
