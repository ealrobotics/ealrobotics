// Wrap every letter in a span
const text1 = new Letterize({
  targets: ".ml7 .text-wrapper",
  className: "letter",
});

const text2 = new Letterize({
  targets: ".ml6 .text-wrapper",
  className: "letter",
});

const titleAnimation = anime.timeline({ loop: false })
  .add({
    targets: text1.listAll,
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 500,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: text2.listAll,
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 500,
    delay: (el, i) => 50 * i
  });

const arrowDownAnimation = anime.timeline({
  targets: '#down-arrow',
  delay: anime.stagger(20),
  loop: true
});

function startArrowDownAnimation() {
  document.querySelector("#down-arrow").style.opacity = 1
  arrowDownAnimation
    .add({
      translateY: -40,
    })
    .add({
      translateY: 0,
    })
}

titleAnimation.finished.then(startArrowDownAnimation);


