export const elementsObject = {
  leftTitle: document.querySelector(".left-title"),
  leftText: document.querySelector(".left-text"),
  rightImage: document.querySelector(".rightContainer img"),
  navShopElement: document.querySelector(".shopElement"),
  navMsElement: document.querySelector(".msElement"),
  edmElement: document.querySelector(".edmElement"),
  initialState: document.querySelector(".initialState"),
};

//functions to add multiple elementss
export function addMultipleElements(element1, element2) {
  elementsObject.leftTitle.classList.add(element1);
  elementsObject.leftText.classList.add(element1);
  elementsObject.rightImage.classList.add(element2);
}

//functions remove Navbar Classes for animation
export function navRemoveClasses(element1) {
  elementsObject.navShopElement.classList.remove(element1);
  elementsObject.navMsElement.classList.remove(element1);
  elementsObject.edmElement.classList.remove(element1);
}
// Remove classes from multiple elements
export function removeClasses(element1, element2, ...element) {
  elementsObject.leftTitle.classList.remove(element1, element2);
  elementsObject.leftText.classList.remove(element1, element2);
  elementsObject.rightImage.classList.remove(...element, ...element);
}

export function initialState(
  title,
  text,
  imageSource,
  startButton,
  ...elements
) {
  const initialButton = document.querySelector(".initialState");
  initialButton.addEventListener("click", () => {
    elementsObject.leftTitle.innerText = title;
    elementsObject.leftText.innerHTML = text;
    elementsObject.rightImage.src = imageSource;
    initialButton.classList.remove(...elements);
    startButton.innerText = "Start App";
    count = 0;
  });
}

export function scrollPage(element) {
  const showArrow = document.querySelector(element);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      showArrow.style.display = "block";
      changeNavBar("add", "add", "./assets/andreisb2.png");
    } else {
      showArrow.style.display = "none";
      changeNavBar("remove", "remove", "./assets/andreisb.png");
    }
  });
  showArrow.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}

function changeNavBar(action1, action2, imageSrc) {
  const navBar = document.querySelector("nav");
  const navLogo = document.querySelector(".nav-logo");
  const navElements = navBar.querySelectorAll("ul li a");
  if (action1 === "add") {
    navBar.classList.add("bg-black/80");
  } else if (action1 === "remove") {
    navBar.classList.remove("bg-black/80");
  }

  if (action2 === "add") {
    navElements.forEach((item) => item.classList.add("text-white"));
  } else if (action2 === "remove") {
    navElements.forEach((item) => item.classList.remove("text-white"));
  }

  navLogo.src = imageSrc;
}
