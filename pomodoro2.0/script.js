let countdown = 0;
let seconds = 0;
let isBreak = true;
let isPaused = true;
let workTime = 25;
let breakTime = 5;

const status = document.querySelector('#status');
const timerDisp = document.querySelector('.timer');
const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const workTimeButton = document.querySelector('#setWorkTime');
const breakTimeButton = document.querySelector('#setBreakTime');


/**
 * Event listeners for start button and reset button,
 * pressing start button will start the timer,
 * reset button will set values to default
 */
startButton.addEventListener('click', () => {
  clearInterval(countdown);
  isPaused = !isPaused;

  if (!isPaused) {
    countdown = setInterval(timer, 1000);
  }
})

resetButton.addEventListener('click', () => {
  clearInterval(countdown);
  seconds = workTime * 60;
  countdown = 0;
  isBreak = true;
  isPaused = true;
})

workTimeButton.addEventListener('click', () => {
  workTime = document.querySelector('#workTimeLength').value;
})

breakTimeButton.addEventListener('click', () => {
  breakTime = document.querySelector('#pauseTimeLength').value;
})

const timer = () => {
  seconds--;
  if (seconds < 0) {
    clearInterval(timer);
    seconds = (isBreak ? breakTime : workTime) * 60;
    isBreak = !isBreak;
  }
}

const countdownDisplay = () => {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  timerDisp.textContent = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

const buttonDisplay = () => {
  if (isPaused && countdown === 0) {
    startButton.textContent = 'START!';
  } else if (isPaused && countdown !== 0) {
    startButton.textContinue = 'Return';
  } else {
    startButton.textContent = 'Pause';
  }
}

const updateHTML = () => {
  countdownDisplay();
  isBreak ? status.textContent = "Keep working" : status.textContent = "Take a Break!";
  workTimeLength.textContent = workTime;
  breakTimeLength.textContent = breakTime;
}

window.setInterval(updateHTML, 100);

document.onclick = updateHTML;