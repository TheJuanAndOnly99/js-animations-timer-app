const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('#timer-circle');
const perimeter = 2 * Math.PI * circle.getAttribute('r');

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log('Timer started');
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
  },
  onComplete() {
    console.log('Done!');
  }
});

const setStrokeDashArray = (selector) => {
  const circleRadius = circle.getAttribute('r');
  const perimeter = 2 * Math.PI * circleRadius;
  circle.style.strokeDasharray = `${perimeter}px`;
};

const setStrokeDashoffset = (selector, amount) => {
  setStrokeDashArray(selector);
  circle.style.strokeDashoffset = `-${amount}px`;
};

setStrokeDashArray();
