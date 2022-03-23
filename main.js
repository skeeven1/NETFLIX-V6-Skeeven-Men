// right event
function rightScroll(carousel, rightArrow) {
const scroll = document.querySelector(carousel);
  const right = document.querySelector(rightArrow);
  scroll.scrollLeft += scroll.offsetWidth;
  

}

// left event
function leftScroll(carousel, leftArrow) {

  const scroll = document.querySelector(carousel);

  const left = document.querySelector(leftArrow);

 
  scroll.scrollLeft -= scroll.offsetWidth;
  

}

function hiddenHeader() {
  if (document.body.scrollTop || document.documentElement.scrollTop > 990) {
    document.getElementById("black_header").style.backgroundColor = "black";
  } else {
    document.getElementById("black_header").style.backgroundColor = "transparent";
  }
}

function RandomImg1() {


  for (let i = 1; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * jojoImg.length);
    document.getElementById("jojo" + i.toString()).src = jojoImg[randomNum];
    
    var randomNum2 = Math.floor(Math.random() * animeImg.length);
    document.getElementById("anime" + i.toString()).src = animeImg[randomNum2];
    
    var randomNum3 = Math.floor(Math.random() * animeImg.length);
    document.getElementById("japan_series" + i.toString()).src = japan_series[randomNum3];

     var randomNum4 = Math.floor(Math.random() * more_japan_seriesImg.length);
    document.getElementById("more_japan_series" + i.toString()).src = more_japan_seriesImg[randomNum4];

    var randomNum5 = Math.floor(Math.random() * more_japan_animeImg.length);
    document.getElementById("more_japan_anime" + i.toString()).src = more_japan_animeImg[randomNum5];

}
}

var jojoImg = new Array(
  "assets/img/images main/jojop1.jpg",
  "assets/img/images main/jojo p2.jpg",
  "assets/img/images main/jojo p3.jpg",
  "assets/img/images main/jojo p4.png",
  "assets/img/images main/jojo p5.webp",
  "assets/img/images main/jojo p6.jpg",
);

var animeImg = new Array(

  "assets/img/images main/one piece.jpg",
  "assets/img/images main/akame.jpg",
  "assets/img/images main/yamada.jpg",
  "assets/img/images main/chainsaw.jpg",
  "assets/img/images main/tqq2.jpg",
  "assets/img/images main/solo.jpg",
  
  );

  var japan_series = new Array(
    
    "assets/img/images main/tg.png",
    "assets/img/images main/ds.jpg",
    "assets/img/images main/dsm.webp",
    "assets/img/images main/jjk.jpg",
    "assets/img/images main/je veux manger.jpg",
    "assets/img/images main/jjkm.jpg",
  )

  var more_japan_seriesImg = new Array(

    "assets/img/images main/redo.png",
    "assets/img/images main/hanako.jpg",
    "assets/img/images main/ngnl.jpg",
    "assets/img/images main/devilman.jpg",
    "assets/img/images main/dorohedoro.jpg",
    "assets/img/images main/ajin.png",
    
    );
  
    var more_japan_animeImg = new Array(

      "assets/img/images main/haikyuu.jpg",
      "assets/img/images main/parasyte.jpg",
      "assets/img/images main/mp100.jpg",
      "assets/img/images main/tye.webp",
      "assets/img/images main/kaguya.jpg",
      "assets/img/images main/blue spring.webp",
      
      );   

      function playMusic(){
        var music = new Audio('rok_opening.mp3');
        music.play();
        
        }

       
      
        function video_hover_mylist(video_hover, video_hover_none) {
          let variable_video = document.getElementById(video_hover)
          variable_video.classList.add('opacity-0')
          variable_video.classList.remove('opacity-100')    
      
          let variable_inverse_video = document.getElementById(video_hover_none)
          variable_inverse_video.classList.add('opacity-100')
          variable_inverse_video.classList.remove('opacity-0')
      }

      function video_hove_mylist2(video_hover, video_hover_none) {
        let variable_video = document.getElementById(video_hover)
        variable_video.classList.remove('opacity-0')
        variable_video.classList.add('opacity-100') 
    
        let variable_inverse_video = document.getElementById(video_hover_none)
        variable_inverse_video.classList.add('opacity-0')
        variable_inverse_video.classList.remove('opacity-100')
    }
     











window.onscroll = function() {hiddenHeader()};
window.onload = RandomImg1; 