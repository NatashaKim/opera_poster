let controller = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
  duration: 7000
});
mainScene.setPin('#wrapper_2');
mainScene.addTo(controller);




// let mainScene = document.querySelector('#wrapper')
// let box1Animation = anime({
//   targets: box1,
//   translateX: 500,
//   rotate: [0, 360],
//   duration: 1500,
//   autoplay: false
// })
