const activeImage = document.querySelector('#current-img')
const images = document.querySelector('.img-gallery')
const img = document.querySelectorAll('.img-gallery img')

// set opacity for first image
img[0].style.opacity = 0.6 

// listen for click event
images.addEventListener('click', toggleImg)

// handle clicked image
function toggleImg(e){
  // reset curent opacity
  img.forEach(img =>(img.style.opacity = 1))
  // change active image to clicked image
  activeImage.src = e.target.src 
  // set opcaity for clicked image
  e.target.style.opacity = 0.6
  // add fade-in class to activeImage
  activeImage.classList.add('fade-in')
  // remove fade in class after half a sec
  setTimeout(() => activeImage.classList.remove('fade-in'), 500)
}