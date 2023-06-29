const loadPageFunctions = () => {
  const menu_bar = document.querySelector(".navigation");
  const menu_icon = document.querySelector(".hamburger-icon button");
  const progress = document.querySelector("#progress");

  // toggle the sidebar navigation

  menu_icon.addEventListener("click", (e) => {
    menu_bar.classList.toggle("active");
  });

  // setting background color to indicate how long the music has been playing for.
  progress.addEventListener("input", (e) => {
    let progressValue = e.target.value;

    let active = (progressValue / progress.max) * 100;

    progress.style.background = `linear-gradient(to right, #313132 ${active}%, #eeeeee ${active}%)`;
  });
};

window.addEventListener("DOMContentLoaded", loadPageFunctions);
