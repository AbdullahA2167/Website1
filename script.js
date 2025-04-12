const plane = document.getElementById('plane');

document.querySelector('.h-scroll').addEventListener('scroll', function () {
  const scrollX = this.scrollLeft;
  const maxScroll = this.scrollWidth - this.clientWidth;
  const percent = scrollX / maxScroll;

  const windowWidth = window.innerWidth;
  const travelX = percent * (windowWidth - 100); // adjust offset

  plane.style.transform = `translateX(${travelX}px)`;
});
