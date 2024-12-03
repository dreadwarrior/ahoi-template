// Masonry layout with CSS grid.
// Based on:
// - https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/#aa-grid-javascript-manipulated-row-spans
// - https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
function resizeGridItem(item) {
  grid = item.parentNode;
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
  allItems = document.querySelectorAll(".recent-category--grid .item");
  for (x = 0; x < allItems.length; x++) {
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

tocNavigation();

window.onload = resizeAllGridItems();
window.addEventListener("resize", resizeAllGridItems);
