/* ============================== Typing Animation ============================== */
var typed = new Typed(".typing", {
    strings: ["", "Java Developer", "Web Developer", "Software Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})
/* ============================== Navigation ============================== */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

let currentSectionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = navList[0].querySelector("a");
    homeLink.classList.add("active");
    allSection.forEach(section => section.classList.remove("active", "back-section"));
    allSection[0].classList.add("active");
});

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        setBackSection(currentSectionIndex);

        currentSectionIndex = i;

        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");

        showSection(this);

        if (window.innerWidth < 1200) {
            asideSelectionToggleBtn();
        }
    });
}

function setBackSection(index) {
    allSection.forEach(section => section.classList.remove("back-section"));
    allSection[index].classList.add("back-section");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    setBackSection(currentSectionIndex);
    currentSectionIndex = sectionIndex;
    showSection(this);
    updateNav(this);
});

const navToggleBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navToggleBtn.addEventListener("click", () => {
    asideSelectionToggleBtn();
});

function asideSelectionToggleBtn() {
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

