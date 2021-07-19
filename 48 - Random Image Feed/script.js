const container = document.querySelector(".container"),
  unsplashURL = "https://source.unsplash.com/random/",
  rows = 15;

for (let i = 0; i < rows; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
