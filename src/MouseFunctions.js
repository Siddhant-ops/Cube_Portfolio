export const AppCubeMove = (e, move) => {
  if (move) {
    var degY = 360 * (e.pageX / window.innerWidth);
    var degX = 360 * (e.pageY / window.innerHeight);

    document.querySelector(
      "#cube"
    ).style.transform = `translateZ(-100px) rotateY(${degY}deg) rotateX(${degX}deg)`;
  }
};

export const generateXY = () => {
  var x, y;

  x = Math.floor(Math.random * 100);
  y = Math.floor(Math.random * 100);

  document.querySelector(
    "#cube"
  ).style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
};

export const homeNavsMouseEnter = (degs) => {
  generateXY();

  setTimeout(() => {
    document.querySelector("#cube").style.transform = degs;
  }, 500);
};
