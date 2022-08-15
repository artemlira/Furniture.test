
const items = document.querySelector('.benefits__items');
const item = items.querySelectorAll('.benefits__item');




export function benefitsSlider() {
   items.addEventListener('click', (event) => {
      let target = event.target;
      if (target.closest('.left')) {
         item.forEach(e => e.classList.add('hidden'));
         for (let i = 2; i < item.length; i--) {
            if (i < 0) {
               i = 2;
            }
            item[i].classList.remove('hidden');
         }
      }

   });

}

