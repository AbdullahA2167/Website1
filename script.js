const plane = document.getElementById("plane");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const percentage = scrollY / maxScroll;

  const x = percentage * (window.innerWidth - 100);
  const y = percentage * (window.innerHeight * 2.5);

  plane.style.transform = `translate(${x}px, ${y}px)`;
});
