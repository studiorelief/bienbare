import './index.css';

import { navScroll } from '$utils/navbar';
import { swiperParole, swiperTeam } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  navScroll();
  swiperTeam();
  swiperParole();
});
