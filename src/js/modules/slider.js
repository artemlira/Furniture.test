const sliders = document.querySelector('.slider')
const allSliders = sliders.querySelectorAll('.slider__item');
const number = sliders.querySelector('.first__number');
const images = sliders.querySelectorAll('.image');
let index = 0;


function slider() {
   sliders.addEventListener('click', (event) => {
      let target = event.target;
      console.dir(target);
      if (target.closest('.next')) {
         index++;
         if (index > 3) {
            index = 0;
         }
         next(index);
      }
      if (target.closest('.prev')) {
         index--;
         if (index < 0) {
            index = 3;
         }
         prev(index);
      }
      number.innerText = `0${index + 1}`;
   });
}

function next(i) {
   allSliders.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('animate__fadeInRight');
      item.classList.remove('animate__fadeInLeft');
   });
   images.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('animate__backInRight');
      item.classList.remove('animate__backInLeft');
   });

   allSliders[i].classList.remove('hidden');
   allSliders[i].classList.add('animate__fadeInRight');
   images[i].classList.remove('hidden');
   images[i].classList.add('animate__backInRight');
}

function prev(i) {
   allSliders.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('animate__fadeInRight');
      item.classList.remove('animate__fadeInLeft');
   });
   images.forEach(item => {
      item.classList.add('hidden');
      item.classList.remove('animate__backInRight');
      item.classList.remove('animate__backInLeft');
   });

   allSliders[i].classList.remove('hidden');
   allSliders[i].classList.add('animate__fadeInLeft');
   images[i].classList.remove('hidden');
   images[i].classList.add('animate__backInLeft');
}

export { slider, next };