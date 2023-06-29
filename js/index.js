const loadPageFunctions = () => {
  const menu_bar = document.querySelector(".navigation");
  const menu_icon = document.querySelector(".hamburger-icon button");
  const audio = document.querySelector("#audio-player");
  const progress = document.querySelector("#progress");
  const playButton = document.querySelector(".play-icon");
  const playIcon = playButton.querySelector(".play-icon .fa-play");

  // toggle the sidebar navigation

  menu_icon.addEventListener("click", (e) => {
    menu_bar.classList.toggle("active");
  });

  // set the progress bar value
  audio.addEventListener("loadedmetadata", (e) => {
    progress.max = e.target.duration;
    progress.value = e.target.currentTime;
  });

  // set pause and play
  playIcon.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-play")) {
      audio.play();
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
    } else {
      audio.pause();
      e.target.classList.add("fa-play");
      e.target.classList.remove("fa-pause");
    }
  });

  // progress bar slider thumb moves according to the duration of the music
  audio.addEventListener("play", (e) => {
    setInterval(() => {
      progress.value = e.target.currentTime;
    }, 500);
  });

  // onclick of the progress bar, it should update the duration and start playing the song from that particular time

  progress.addEventListener("change", (e) => {
    audio.play();
    audio.currentTime = e.target.value;

    if (playIcon.classList.contains("fa-play")) {
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    }
  });

  // setting background color to indicate how long the music has been playing for.
  progress.addEventListener("input", (e) => {
    let progressValue = e.target.value;

    let active = (progressValue / progress.max) * 100;

    progress.style.background = `linear-gradient(to right, #313132 ${active}%, #eeeeee ${active}%)`;
  });
};

window.addEventListener("DOMContentLoaded", loadPageFunctions);
