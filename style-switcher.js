/* ============================== theme light and adark mode ============================== */
document.addEventListener("DOMContentLoaded", () => {
    const switcher = document.querySelector(".day-night");
    const icon = switcher.querySelector("i");

    const currentTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.add(currentTheme);

    if (currentTheme === "dark") {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }

    switcher.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");

        if (document.body.classList.contains("dark")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
});
