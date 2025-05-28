AOS.init({
  once: true,
});
const show = document.getElementById("show");
const itemList = document.getElementById("item-list");
const cross = document.getElementById("cross");
show.addEventListener("click", function () {
  itemList.classList.add("visible_nav");
  show.style.display = "none";
  cross.style.display = "block";
});
cross.addEventListener("click", function () {
  itemList.classList.remove("visible_nav");
  show.style.display = "block";
  cross.style.display = "none";
});
