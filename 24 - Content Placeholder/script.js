const header = document.getElementById("header"),
  title = document.getElementById("title"),
  excerpt = document.getElementById("excerpt"),
  profile_img = document.getElementById("profile_img"),
  name = document.getElementById("name"),
  date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg"),
  animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="2.png" alt="" />';
  title.innerHTML = "Play Valorant with me";
  excerpt.innerHTML =
    "Lorem ipsum dolor amet consectetur. My nickname is Empty #4164.";
  profile_img.innerHTML = '<img src="1.jpg" alt="Me" />';
  name.innerHTML = "Muhammad Khusanov";
  date.innerHTML = "Jul 12, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
