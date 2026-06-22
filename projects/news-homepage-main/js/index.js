const newsContainerEl = document.querySelector(".news");
// newsContainerEl.querySelectorAll(".new-article").forEach((elm, i) => {
//   elm.style.backgroundColor = "red";
// });

// newsContainerEl.firstElementChild.textContent = "New JS";
// newsContainerEl.firstElementChild.innerHTML =
//   "<span style='color:red;'>Hello world</span>";

const articles = newsContainerEl.querySelectorAll(".new-article");
// articles[0].firstElementChild
// const title = document.getElementById("hydrogen");

const overlayEl = document.querySelector(".overlay");
const navContainerEl = document.querySelector(".nav-container");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");

openBtn.addEventListener("click", () => {
  //   console.log(overlayEl.classList);
  //   console.log(navContainerEl.classList);

  overlayEl.classList.remove("hide");
  navContainerEl.classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
  overlayEl.classList.add("hide");
  navContainerEl.classList.add("hide");
});
