export function next() {
  document.querySelector(".carousel-item.prev")?.classList.remove("prev");
  const currentActiveItem = document.querySelector(".carousel-item.active");
  const nextActiveItem = document.querySelector(".carousel-item.next");
  const preparedNextActiveItem =
    nextActiveItem?.nextElementSibling ??
    document.querySelector(".carousel-item:first-child");
  currentActiveItem?.classList.add("prev");
  currentActiveItem?.classList.remove("active");
  nextActiveItem?.classList.add("active");
  nextActiveItem?.classList.remove("next");
  preparedNextActiveItem?.classList.add("next");
}
export function prev() {
  document.querySelector(".carousel-item.next")?.classList.remove("next");
  const currentActiveItem = document.querySelector(".carousel-item.active");
  const prevActiveItem = document.querySelector(".carousel-item.prev");
  const preparedPrevActiveItem =
    prevActiveItem?.previousElementSibling ??
    document.querySelector(".carousel-item:last-child");
  currentActiveItem?.classList.add("next");
  currentActiveItem?.classList.remove("active");
  prevActiveItem?.classList.add("active");
  prevActiveItem?.classList.remove("prev");
  preparedPrevActiveItem?.classList.add("prev");
}

