
function darkTheme() {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.getElementById("icon-theme").setAttribute("class", "fa-solid fa-sun");
}

function lightTheme() {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.getElementById("icon-theme").setAttribute("class", "fa-solid fa-moon");
}

const theme = localStorage.getItem("theme");

theme === 'dark' ? darkTheme() : lightTheme();

const changeTheme = document.getElementById("change-theme");

changeTheme.addEventListener("click", () => {
    document.querySelector("html").getAttribute("data-theme") === "dark" ? lightTheme() : darkTheme();
})

