import * as flsFunctions from "./modules/functions.js";
import * as sliderFunctions from "./modules/slider.js";
import * as changeImage from "./modules/categories.js";
import * as burgerMenu from "./modules/burger-menu.js";
import * as benefits from "./modules/benefits-slider.js";

flsFunctions.isWebp();
sliderFunctions.slider();
changeImage.changeImage();
burgerMenu.showMenu();
benefits.benefitsSlider();


import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();
