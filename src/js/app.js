import '../scss/ahoi.scss';

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
  const allItems = document.querySelectorAll(".recent-category--grid .item");
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function tocNavigation() {
  const tocLinks = document.querySelectorAll('.collection-navigation__menu a');

  tocLinks.forEach((it) => it.addEventListener('click', (e) => {
    it.scrollIntoView({
      inline: 'center'
    });
  }));
}

function handleDialogs() {
  const modals = document.querySelectorAll('.dialog--modal');
  modals.forEach(it => {
    document.querySelector('button[aria-controls=' + it.id + ']').addEventListener('click', e => it.showModal());
    it.querySelector('button[autofocus]').addEventListener('click', e => it.close());
  });
}

tocNavigation();
handleDialogs();

window.addEventListener("load", resizeAllGridItems)
window.addEventListener("resize", resizeAllGridItems);
