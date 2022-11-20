const MOV_MULTIPLIER = 4000;
const INITIAL_WRAPPER_TRANSFORM = [-50, -53];
const INITIAL_RECT_TRANSFORM = [-172,-46];

const background = document.querySelector('.promo__bg');
const titleWrapper = document.querySelector('.promo__title-wrapper');
const rect = titleWrapper.querySelector('.promo__lion-rect');

window.addEventListener('mousemove', mouseMoveHandler);

function calcMovement(event, multiplier) {
  const moveBgX = (window.outerWidth / 1.4 - event.clientX) / multiplier;
  const moveBgY = (window.outerHeight / 1.4 - event.clientY) / multiplier;
  return {moveBgX, moveBgY};
}

function mouseMoveHandler(event) {
  const {moveBgX, moveBgY} = calcMovement(event, MOV_MULTIPLIER);
  background.style.transform = `translate(${moveBgX}%,${moveBgY}%) scale(1.01)`;
  titleWrapper.style.transform = `translate(${moveBgX / 2 + INITIAL_WRAPPER_TRANSFORM[0]}%,${moveBgY / 2 + INITIAL_WRAPPER_TRANSFORM[1]}%)`;
  rect.style.transform = `translate(${moveBgX / 0.5 + INITIAL_RECT_TRANSFORM[0]}%,${moveBgY / 0.5 + INITIAL_RECT_TRANSFORM[1]}%)`;

}
