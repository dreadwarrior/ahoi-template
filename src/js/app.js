import '../scss/ahoi.scss';
import { chooseBook } from "./collection-item-chooser";
import Collapse from 'bootstrap/js/dist/collapse'; // FIXME: remove when reworking navbar
import Modal from 'bootstrap/js/dist/modal';

// Masonry layout with CSS grid.
// Based on:
// - https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/#aa-grid-javascript-manipulated-row-spans
// - https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
function resizeGridItem(item) {
  const grid = item.parentNode;
  const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  const allItems = document.querySelectorAll(".masonry-items-list .masonry-items-list__item");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function tocNavigation() {
  const tocLinks = document.querySelectorAll('.panel-navigation__menu a');

  tocLinks.forEach((it) => it.addEventListener('click', (e) => {
    it.scrollIntoView({
      inline: 'center'
    });
  }));
}

tocNavigation();
chooseBook('#random-book-chooser');

window.addEventListener("load", resizeAllGridItems)
window.addEventListener("resize", resizeAllGridItems);
