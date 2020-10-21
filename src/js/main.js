const visibleWindow = document.getElementById("visible");
const slider = document.getElementById("our-clients-slider");
const sliderEl = document.getElementsByClassName("our-clients-el");
const sliderButton = document.getElementsByClassName("our-clients-list-item");
const navBtn = document.getElementById("check-id-label");
const navMenu = document.getElementById("nav-bar");
const navLinks = document.getElementsByClassName("nav-link");
const header = document.getElementById("header");
const topSectionHeight = document.getElementsByClassName('first-section')[0].offsetHeight;
const privilegeContent = document.getElementsByClassName("privilege-content")[0];

const addClass = (item, classItem) => {
    item.classList.add(classItem);
}

const replaceClass = (item, classItem, newClassItem) => {
    item.className = item.className.replace(classItem, newClassItem);
}

const move = visibleWindow.offsetWidth;

sliderButton[0].classList.add('active');

for (let i = 0; i < sliderEl.length; i++) {
    sliderButton[i].addEventListener("click", () => {
        slider.style.left = (-move * i) + "px";
        for (let i = 0; i < sliderEl.length; i++) {

            replaceClass(sliderButton[i], "active", "")

        };
        addClass(sliderButton[i], "active")
    });
};

////////////////////////////////////////////////////////////////

const questionItem = document.getElementsByClassName("privilege-questions-item");
const questionDescription = document.getElementsByClassName("privilege-description");
const questionItemText = document.getElementsByClassName("privilege-questions-item-text");
const questionItemIcons = document.getElementsByClassName("icons");

const activeElement = (idx) => {
    addClass(questionDescription[idx], "active");
    addClass(questionItemText[idx], "color-active");
    replaceClass(questionItemIcons[idx], "icon-plus", "icon-minus");
}

activeElement(0);

for (let i = 0; i < questionItem.length; i++) {
    questionItem[i].addEventListener("click", () => {
        for (let j = 0; j < questionItem.length; j++) {
            replaceClass(questionDescription[j], "active", "");
            replaceClass(questionItemText[j], "color-active", "");
            replaceClass(questionItemIcons[j], "icon-minus", "icon-plus");
        };
        activeElement(i);
    });
};

////////////////////////////////////////////////////////////////

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("label-active");
    navMenu.classList.toggle("nav-active");
    document.body.classList.toggle('scroll-stop');
});


for (let link = 0; link < navLinks.length; link++) {
    navLinks[link].addEventListener("click", () => {
        if (navBtn.classList.contains("label-active")) {
            replaceClass(navBtn, "label-active", "");
            replaceClass(navMenu, "nav-active", "");
            replaceClass(document.body, "scroll-stop", "");
        }
    })
}

window.addEventListener("scroll", () => {
    if (window.scrollY >= 250) {
        header.style.maxHeight = '0';
    } else {
        header.style.maxHeight = '75px';
    }

    if (window.scrollY >= topSectionHeight + header.offsetHeight) {
        header.style.position = 'fixed';
        header.style.maxHeight = '75px';
    } else {
        header.style.position = 'absolute';
    }
});

////////////////////////////////////////////////////////////////////

if (window.innerWidth > 1200) {
    privilegeContent.setAttribute("id", "content")
} 