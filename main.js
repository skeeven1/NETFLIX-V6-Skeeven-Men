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




function videohover2 (videolocation, video,img){
  var videolocation =document.querySelector(videolocation)
  var video =document.querySelector(video)
  var image = document.querySelector(img)

  videolocation.addEventListener('mylistRandom', function (){
      video.play()
      $(video).show()
      $(image).hide()
  })
  videolocation.addEventListener('mylistRandom', function (){
      video.pause()
      $(video).hide()
      $(image).show()
  });
}

videohover('.mainhover','.videogantz1')
videohover2('.carouselhoverimg2','.videogantz2',".hoverimg2")




     











window.onscroll = function() {hiddenHeader()};
window.onload = RandomImg1; 