const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

function handleClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')
  if (Number(inputNumber.value) == randomNumber) {
    //vai pegar o numero do inputNumber e comparar com o numero aleatorio criado, caso sejam iguais, entram no IF
    document.querySelector('.screen1').classList.add('hide') //adicionará o hide a classe screen1
    document.querySelector('.screen2').classList.remove('hide') //removerá o hide da classe screen2
    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${attempts} tentativas`
  }
  attempts++
}
