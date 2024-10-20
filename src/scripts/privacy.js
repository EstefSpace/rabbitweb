const privacyButton = document.querySelector("#button");

privacyButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");

    dialog.setAttribute("open", "true")
})

const close = document.querySelector("#close");

close.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");

    dialog.removeAttribute("open")
})
