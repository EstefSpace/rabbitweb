const tosButton = document.querySelector("#button");

tosButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");

    dialog.setAttribute("open", "true")
})

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");

    dialog.removeAttribute("open")
})
