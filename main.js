const randomNumber = Math.round(Math.random() * 10)
let attempts = 1
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
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

//eventos

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick) //funcao como referencia
btnReset.addEventListener('click', function () {
  //funcao anonima
  screen1.classList.remove('hide') //removerá o hide a classe screen1
  screen2.classList.add('hide') //adicionará o hide da classe screen2
  attempts = 1
})
