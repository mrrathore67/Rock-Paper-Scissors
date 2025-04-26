const optRock = document.querySelector('.rock')
const optpaper = document.querySelector('.paper')
const optScissors = document.querySelector('.scissors')
const result = document.querySelector('.result')

optRock.addEventListener('click', () => {
    play('rock')
})
optpaper.addEventListener('click', () => {
    play('paper')
})
optScissors.addEventListener('click', () => {
    play('scissors')
})
let wins = 0;
let losses = 0;
let draws = 0;


function play(userChoice) {
    const options = ['rock', 'paper', 'scissors'];
    const computerChoice = options[Math.floor(Math.random() * 3)];
  
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    const gameResult = getResult(userChoice, computerChoice);
    result.innerHTML = `
      <p>You chose: <strong>${userChoice}</strong></p>
      <p>Computer chose: <strong>${computerChoice}</strong></p>
      <h2>Result: ${gameResult}</h2>
       <p>Wins: ${wins}</p>
       <p>Losses: ${losses}</p>
       <p>Draws: ${draws}</p>
    `;


  };
  
  function getResult(user, computer) {
    if (user === computer) {
        draws++;
      return 'Draw!';
      
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
        wins++;
      return 'You win!';
      
    } else {
        losses++;
      return 'You lose!';
      
    }
  }




