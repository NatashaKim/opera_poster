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



let path = anime.path('#curve')
let svgMotion = anime({
  targets: '.map .slider',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  autoplay: false
})

var tween = TweenMax.to(".background-container", 1, {scale:0.1, ease:Linear.easeNone});

// build scene
var scene = new ScrollMagic.Scene({
  duration: 14000
});

        scene.on("progress", function (e) {

        svgMotion.seek(svgMotion.duration * e.progress);

        if(e.progress < 0.14286){
          subName.innerText = "0.000000";
          subInfo.innerText = "СИНГУЛЯРНОСТЬ";
          mainName.innerHTML = "10 <span class = \"test\">-9</span> секунд";
          mainInfo.innerText = "ЧАСТИЦЫ И СИЛЫ";
        }
        else if(e.progress < 0.28571){
          subName.innerHTML = "10 <span class = \"test\">-9</span> секунд";
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

      });
        scene.setTween(tween);
        scene.addTo(controller);
