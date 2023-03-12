const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId;

  const updateTimer = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const hoursString = hours.toString().padStart(2, '0');
    const minutesString = minutes.toString().padStart(2, '0');
    const secondsString = secondsLeft.toString().padStart(2, '0');

    const message = `${hoursString}:${minutesString}:${secondsString} - `;
    const messageSeconds = `${hours ? `${hours} час${hours > 1 ? 'а' : ''}, ` : ''}${minutes ? `${minutes} минут${minutes > 1 ? 'ы' : 'а'}, ` : ''}${secondsLeft} секунд${secondsLeft > 1 ? 'ы' : 'а'}.`;

    timerEl.textContent = message + messageSeconds;

    if (seconds <= 0) {
      clearInterval(intervalId);
    }
  };

  return (seconds) => {
    clearInterval(intervalId);

    updateTimer(seconds);
    intervalId = setInterval(() => {
      seconds--;
      updateTimer(seconds);
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});





