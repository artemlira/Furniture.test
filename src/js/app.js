import * as flsFunctions from "./modules/functions.js";
import * as sliderFunctions from "./modules/slider.js";
import * as changeImage from "./modules/categories.js";

flsFunctions.isWebp();
sliderFunctions.slider();
changeImage.changeImage();


import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();
