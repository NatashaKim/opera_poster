// Зафиксировать окно
let controller = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
  duration: 14000
});
mainScene.setPin('#wrapper_2');
mainScene.addTo(controller);

// Анимация текста
var subName = document.getElementById("sub_name");
var subInfo = document.getElementById("sub_info");
var mainName = document.getElementById("main_name");
var mainInfo = document.getElementById("main_info");

// build scene
var scene = new ScrollMagic.Scene({duration: 14000})
        .on("progress", function (e) {

        if(e.progress < 0.14286){
          subName.innerText = "0.000000";
          subInfo.innerText = "СИНГУЛЯРНОСТЬ";
          mainName.innerText = "10 секунд";
          mainInfo.innerText = "ЧАСТИЦЫ И СИЛЫ";
        }
        else if(e.progress < 0.28571){
          subName.innerText = "10 секунд";
          subInfo.innerText = "ЧАСТИЦЫ И СИЛЫ";
          mainName.innerText = "1 секунда";
          mainInfo.innerText = "АТОМНЫЕ ЯДРА";
        }
        else if(e.progress < 0.42857){
          subName.innerText = "1 секунда";
          subInfo.innerText = "АТОМНЫЕ ЯДРА";
          mainName.innerText = "380 000 лет";
          mainInfo.innerText = "ФОНОВОЕ ИЗЛУЧЕНИЕ";
        }
        else if(e.progress < 0.57143){
          subName.innerText = "380 000 лет";
          subInfo.innerText = "ФОНОВОЕ ИЗЛУЧЕНИЕ";
          mainName.innerText = "1 млрд лет";
          mainInfo.innerText = "БОЛЬШИЕ СТРУКТУРЫ";
        }
        else if(e.progress < 0.71429){
          subName.innerText = "1 млрд лет";
          subInfo.innerText = "БОЛЬШИЕ СТРУКТУРЫ";
          mainName.innerText = "5 млрд лет";
          mainInfo.innerText = "КЛАСТЕРЫ ГАЛАКТИК";
        }
        else if(e.progress < 0.85714){
          subName.innerText = "5 млрд лет";
          subInfo.innerText = "КЛАСТЕРЫ ГАЛАКТИК";
          mainName.innerText = "13,7 млрд лет";
          mainInfo.innerText = "ВСЕЛЕННАЯ СЕГОДНЯ";
        }
        else if(e.progress < 1){
          subName.innerText = "13,7 млрд лет";
          subInfo.innerText = "ВСЕЛЕННАЯ СЕГОДНЯ";
          mainName.innerText = "Будущее";
          mainInfo.innerText = "ХОЛОДНЫЙ КОСМОС";
        }

        })
        .addTo(controller);




// let mainScene = document.querySelector('#wrapper')
// let box1Animation = anime({
//   targets: box1,
//   translateX: 500,
//   rotate: [0, 360],
//   duration: 1500,
//   autoplay: false
// })
