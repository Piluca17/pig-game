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

//Declaramos las variables

let currentScore, scores, activePlayer

//llamar a función init que haga lo siguiente:
// el dado por defecto que no se vea
// score1 y score2 a 0
// currentScore1 y currentScore2 a 0

const init = function () {
  currentScore = 0
  activePlayer = 0
  scores = [0, 0]
  // diceEl.classList.add('hidden')
  diceEl.style.display = 'none'
  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0
}

init()

console.log(btnNew, btnRoll, btnHold)

//cuando se hace click en el botón roll:
//el dado se pone visible

btnRoll.addEventListener('click', () => {
  //sacas un número del 1 al 6
  const dice = Math.trunc(Math.random() * 6) + 1

  //mostrar el dado
  diceEl.style.display = 'block'
  diceEl.src = `dice-${dice}.png`

  if (dice === 1) {
    //pierdes turno
    //TODO: cambiar de jugador (variable activePlayer, color css, currentScore a 0)
    switchPlayer()
  } else {
    //sumar el dado al current score
    currentScore += dice
    //TODO: seleccfionar de forma dinámica el textContent
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore
    //current0El.textContent = currentScore
  }
})

btnNew.addEventListener('click', () => {
  console.log('New game')
})

btnHold.addEventListener('click', () => {
  console.log('Pasar turno')
})
