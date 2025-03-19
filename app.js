const state = {
  clicked: true,
};
let count = 0;

const defaultState = {
  title: "Hello Everyone, I'm Andrei",
  text: `<p>    A creative and detail-oriented Front-End Developer with over three
                years of experience in crafting visually appealing and highly
                responsive web applications. Proficient in
                <span class="font-bold text-amber-600"
                  >HTML, CSS, JavaScript, React, Tailwind,</span
                >
                and other modern front-end technologies, with a strong passion for
                building seamless and user-friendly experiences. Skilled in UI/UX
                design principles, ensuring intuitive and engaging interfaces.
                Always eager to explore the latest web trends and technologies to
                deliver high-quality, innovative solutions.</p>`,
  image: "assets/animGif2.gif",
};
const slidesData = [
  {
    title: "Personal Project - PoC",
    text: "A proof of concept (PoC) demonstrating an interactive shopping list application. This project explores dynamic UI updates and smooth animations to enhance the user experience, serving as a foundation for potential future development. By leveraging modern JavaScript frameworks and responsive design techniques, the application ensures optimal usability across a range of devices and screen sizes. The PoC incorporates features such as real-time item additions, deletions, and seamless transitions between different list states. It aims to showcase the potential for intuitive interactions, with a focus on user-centric design and performance.",
    image: "assets/shopping.jpg",
  },
  {
    title: "Maria Casino Project",
    text: "As a developer, I took the project from mockup designs to full functionality, ensuring seamless interactivity and user experience. I implemented a fully responsive design, optimizing the website across all devices for smooth navigation. A key feature of the project is the main header carousel, which I developed to provide smooth and engaging transitions, enhancing the visual appeal of the site. Additionally, I integrated dynamic data through API connectivity, allowing for real-time updates and smooth content flow, ensuring the site remains up-to-date without requiring manual intervention. This combination of responsiveness, interactive elements, and dynamic data integration provides a rich, user-friendly experience across various platforms.",
    image: "assets/casino.jpg",
  },
  {
    title: "Email Marketing & Campaigns",
    text: "As a front-end developer, I gained valuable experience in designing and developing EDMs (Email Design Mockups) for various companies. By leveraging high-standard HTML tables and CSS, I ensured optimal responsiveness across all devices and email clients, including all versions of Microsoft Outlook. Through multiple marketing campaigns, I refined my expertise in optimizing email designs for seamless rendering and a consistent user experience, delivering high-quality results that enhanced engagement and performance.",
    image: "assets/image.jpg",
  },
];

console.log(slidesData.image);
const elementsObject = {
  leftTitle: document.querySelector(".left-title"),
  leftText: document.querySelector(".left-text"),
  rightImage: document.querySelector(".rightContainer img"),
  navShopElement: document.querySelector(".shopElement"),
  navMsElement: document.querySelector(".msElement"),
  edmElement: document.querySelector(".edmElement"),
  initialState: document.querySelector(".initialState"),
};

//Prure function to add single element animation
function addSingleElementAnimation(element, elementClass, timer) {
  setTimeout(() => {
    element.classList.add(elementClass);
  }, timer);
}
// Pure functions to add multiple elementss
function addMultipleElements(element1, element2) {
  elementsObject.leftTitle.classList.add(element1);
  elementsObject.leftText.classList.add(element1);
  elementsObject.rightImage.classList.add(element2);
}

//Pure functions remove Navbar Classes for animation
function navRemoveClasses(element1) {
  elementsObject.navShopElement.classList.remove(element1);
  elementsObject.navMsElement.classList.remove(element1);
  elementsObject.edmElement.classList.remove(element1);
}
// Remove classes from multiple elements
function removeClasses(element1, element2, ...element) {
  elementsObject.leftTitle.classList.remove(element1, element2);
  elementsObject.leftText.classList.remove(element1, element2);
  elementsObject.rightImage.classList.remove(...element, ...element);
}

function initialState(title, text, imageSource, startButton, ...elements) {
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

function MainSlidesAnimation() {
  const btn = document.querySelector(".startApp");

  btn.addEventListener("click", () => {
    const slide = slidesData[count];
    // Disable buttons
    btn.disabled = true;
    elementsObject.initialState.disabled = true;
    addSingleElementAnimation(
      elementsObject.navShopElement,
      "animate-navButtons",
      0
    );
    addSingleElementAnimation(
      elementsObject.navMsElement,
      "animate-navButtons",
      1000
    );
    addSingleElementAnimation(
      elementsObject.edmElement,
      "animate-navButtons",
      2000
    );
    setTimeout(() => {
      addMultipleElements("animate-fadeOut-left", "animate-fedeOut-right");
    }, 3000);
    setTimeout(() => {
      elementsObject.leftTitle.innerText = slide.title;
      elementsObject.leftText.innerText = slide.text;
      elementsObject.rightImage.src = slide.image;
      console.log(typeof elementsObject.rightImage.src);
      addMultipleElements("animate-slideIn-left", "animate-slideIn-right");
    }, 4700);
    //Clearing animation for next iteration
    setTimeout(() => {
      navRemoveClasses("animate-navButtons");
      removeClasses(
        "animate-fadeOut-left",
        "animate-slideIn-left",
        "animate-fedeOut-right",
        "animate-slideIn-right"
      );
      // Activate buttons
      btn.disabled = false;
      elementsObject.initialState.disabled = false;

      btn.innerText = "Next slide";
      elementsObject.initialState.classList.add("animate-initial-state");
    }, 5500);

    if (count < slidesData.length - 1) {
      ++count;
    } else {
      setTimeout(() => {
        btn.innerText = "Start again";
        state.clicked = true;
        count = 0;
      }, 5600);
    }
    setTimeout(() => {
      initialState(
        defaultState.title,
        defaultState.text,
        defaultState.image,
        btn,
        "animate-initial-state"
      );
    }, 5700);
  });
}
MainSlidesAnimation();
