const wrapper = document.querySelector('.categories');
const images = wrapper.querySelectorAll('.inner__img');
const items = wrapper.querySelectorAll('.list__item');
const outerTitle = wrapper.querySelectorAll('.name');
const price = wrapper.querySelectorAll('.outer__text');
const innerTitle = wrapper.querySelectorAll('.inner__title');
const innerText = wrapper.querySelectorAll('.inner__text');

function hideText(elem) {
   elem.forEach(e => {
      if (e.children[0].textContent === "") {
         e.children[0].classList.add('hidden');
      }
   })
}
hideText(innerTitle);
hideText(innerText);

const aboutItems = {
   sofas: {
      price: "7 999 грн",
      about: "Диван"
   },
   beds: {
      price: "8 999 грн",
      about: "Ліжко"
   },
   chairs: {
      price: "3 999 грн",
      about: "Крісло"
   },
   goslings: {
      price: "2 999 грн",
      about: "комод"
   },
   cabinets: {
      price: "10 999 грн",
      about: "Шафа"
   },
   kitchens: {
      price: "15 999 грн",
      about: "Кухня"
   }
}

export function changeImage() {
   wrapper.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.list__item')) {
         items.forEach(e => e.classList.remove('active'));
         target.parentElement.classList.add('active');
         images.forEach((elem, index) => {
            elem.classList.add('animate__flipInY');
            elem.attributes[1].value = `../img/categories/${target.parentElement.id}/0${index + 1}.png`;
         });

         outerTitle.forEach(e => e.innerText = `${aboutItems[target.parentElement.id].about}`);
         price.forEach(e => e.innerText = `${aboutItems[target.parentElement.id].price}`);

         setTimeout(() => {
            images.forEach(e => e.classList.remove('animate__flipInY'));
         }, 1000);
      }
   });
}
