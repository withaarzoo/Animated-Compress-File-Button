document.querySelectorAll(".button").forEach((button) =>
    button.addEventListener("click", (e) => {
        if (!button.classList.contains("compress")) {
            button.classList.add("compress");

            setTimeout(() => button.classList.remove("compress"), 4000);
        }
        e.preventDefault();
    })
);
