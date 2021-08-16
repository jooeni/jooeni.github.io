/*
let data = {
    photo: 'images/bird.jpg',
    title: 'Black and White Bird',
    description: 'Black and White Bird on Brown'
  };
  
  $('#bird').attr('src', data.photo);

let photos = ['Bird', 'Bird2', 'Rocks', 'Flowers', 'Grass', 'Leafs', 'Snow']

let first = photos[0]

let data = {
    photo2: 'images/leafs.jpg',
    title: 'Black and White Bird',
    description: 'Black and White Bird on Brown'
  };
  
  $('#bird').attr('src', data.photo2);

  [STACKOVERFLOW]

  var currentPhoto = new Photo();

  currentPhoto[0] = new Photo();
  currentPhoto[0].src = 'images/bird.jpg';

  currentPhoto[1] = new Photo();
  currentPhoto[1].src = 'images/leafs.jpg';

  currentPhoto[2] = new Photo();
  currentPhoto[2].src = 'images/snow.jpg';

  currentPhoto[3] = new Photo();
  currentPhoto[3].src = 'images/rocks.jpg';

  currentPhoto[4] = new Photo();
  currentPhoto[4].src = 'images/grass.jpg';

  currentPhoto[5] = new Photo();
  currentPhoto[5].src = 'images/bird2.jpg';

  currentPhoto[6] = new Photo();
  currentPhoto[6].src = 'images/flowers.jpg';

  function nextPhoto(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < currentPhoto.length;i++)
    {
        if(currentPhoto[i].src == img.src) // << check this
        {
            if(i === currentPhoto.length){
                document.getElementById(element).src = currentPhoto[0].src;
                break;
            }
            document.getElementById(element).src = currentPhoto[i+1].src;
            break;
        }
    }
}*/

//W3SCHOOLS: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("thumb");
  var captionText = document.getElementById("text");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 