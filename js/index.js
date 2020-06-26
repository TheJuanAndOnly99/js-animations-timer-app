const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log('Timer started');
  },
  onTick() {
    console.log('Tick');
  },
  onComplete() {
    console.log('Done!');
  }
});

const setStrokeDashArray = (selector) => {
  const circleSVG = document.querySelector(selector);
  const circleStyle = getComputedStyle(circleSVG);
  const radius = parseFloat(circleStyle.r);
  const calcPerimeter = 2 * Math.PI * radius - 1;
  circleSVG.style.strokeDasharray = calcPerimeter;
};

const setStrokeDashoffset = (selector) => {
  const circleSVG = document.querySelector(selector);
  const circleStyle = getComputedStyle(circleSVG);
  const offset = parseFloat(circleStyle.strokeDashoffset);
  circleSVG.style.strokeDashoffset = offset;
};
