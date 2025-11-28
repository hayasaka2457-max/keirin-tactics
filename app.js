const racers = document.querySelectorAll(".racer");

let dragging = null;

racers.forEach(racer => {
  racer.addEventListener("pointerdown", e => {
    dragging = racer;
  });
});

document.addEventListener("pointermove", e => {
  if (dragging) {
    dragging.style.left = e.clientX - 25 + "px";
    dragging.style.top = e.clientY - 25 + "px";
  }
});

document.addEventListener("pointerup", () => {
  dragging = null;
});
