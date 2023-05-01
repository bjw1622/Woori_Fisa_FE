const checkbox = document.getElementById("checkbox");
const html = document.querySelector("html");

const toggleDarkmode = () => {
  return checkbox.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
};

checkbox.addEventListener("click", toggleDarkmode);
