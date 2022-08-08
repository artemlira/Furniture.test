const wrapper = document.querySelector('.categories');
const images = wrapper.querySelectorAll('.inner__img');
const items = wrapper.querySelectorAll('.list__item');

export function changeImage() {
   wrapper.addEventListener('click', (event) => {
      let target = event.target;

      if (target.closest('.list__item')) {
         // console.dir(target.parentElement.id);
         items.forEach(e => e.classList.remove('active'));
         target.parentElement.classList.add('active');
         images.forEach((elem, index) => {
            elem.classList.add('animate__flipInY');
            elem.attributes[1].value = `../img/categories/${target.parentElement.id}/0${index + 1}.png`;
         })
         setTimeout(() => {
            images.forEach(e => e.classList.remove('animate__flipInY'));
         }, 1000);
      }
   });
}
