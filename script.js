//Seleccionar elementos del DOM

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
//const btnHold = document.getElementsByClassName('.btn--hold')
const diceEl = document.querySelector('.dice')
const scoreField = document.querySelector('.score')

console.log (btnNew, btnRoll, btnHold)

//Configurar la aplicación (constantes y variables)
const INIT_SCORE = 0

//variables de la aplicación
let score
let score1
let score2

//Inicializar la aplicación
initApp()

btnRoll.addEventListener('click', ()=> {
  //sacas un número del 1 al 6
  const dice = Math.trunc (Math.random() * 6) + 1
  

  //mostrar el dado
  diceEl.src = 'dice-${dice}.png'

  if(dice === 1){
    //pierdes turno
  } else{
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
//llamar a función init que haga lo siguiente:
// el dado por defecto que no se vea
// score1 y score2 a 0
// currentScore1 y currentScore2 a 0

//TODO:
//cuando se hace click en el botón roll:
//el dado se pone visible

function initApp() {
  //Inicializamos score
  score = INIT_SCORE
  scoreField.textContent = score}
