//Seleccionar elementos del DOM

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')
const score0El = document.querySelector('#score--0')
const score1El = document.querySelector('#score--1')
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')

//const btnHold = document.getElementsByClassName('.btn--hold')

//llamar a función init que haga lo siguiente:
// el dado por defecto que no se vea
// score1 y score2 a 0
// currentScore1 y currentScore2 a 0

const init = function () {
  // diceEl.classList.add('hidden')
  diceEl.style.display = 'none'
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
}

init()

console.log(btnNew, btnRoll, btnHold)

btnRoll.addEventListener('click', () => {
  //sacas un número del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  //mostrar el dado
  diceEl.style.display = 'block'
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    //pierdes turno
  } else {
    //sumar el dado al current score
  }
})

btnNew.addEventListener('click', () => {
  console.log('New game')
})

btnHold.addEventListener('click', () => {
  console.log('Pasar turno')
})

//TODO:
//cuando se hace click en el botón roll:
//el dado se pone visible
