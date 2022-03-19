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






var jojoImg = new Array(
  "assets/img/images main/jojop1.jpg",
  "assets/img/images main/jojo p2.jpg",
  "assets/img/images main/jojo p3.jpg",
  "assets/img/images main/jojo p4.png",
  "assets/img/images main/jojo p5.webp",
  "assets/img/images main/jojo p6.jpg",
);







function RandomImg1() {
  
  
  for (let i = 1; i < 10; i++) {
    var randomNum = Math.floor(Math.random() * jojoImg.length);
    document.getElementById("jojo" + i.toString()).src = jojoImg[randomNum];
} 
}



let image_array1 = ["assets/img/images main/one piece.jpg",  
"assets/img/images main/akame.jpg", 
"assets/img/images main/yamada.jpg",
"assets/img/images main/chainsaw.jpg",
"assets/img/images main/tqq2.jpg", 
"assets/img/images main/solo.jpg"] 

function RandomImg(){ 
    var index = Math.floor(Math.random()*image_array.length)           
    document.getElementById("random").src = image_array[index];         
}

  










window.onscroll = function() {hiddenHeader()};
window.onload = RandomImg1; 