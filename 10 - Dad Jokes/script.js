const jokeEl = document.getElementById("joke"),
  jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com/", config),
    data = await res.json();

  jokeEl.innerHTML = data.joke;
}
