const password = document.getElementById("password"),
  background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const input = e.target.value,
    length = input.length * 2;
  background.style.filter = `blur(${20 - length}px)`;
});
