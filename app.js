const state = {
  clicked: true,
};

const slidesData = [
  {
    title: "Personal Project - PoC",
    text: "A proof of concept (PoC) demonstrating an interactive shopping list application. This project explores dynamic UI updates and smooth animations to enhance the user experience, serving as a foundation for potential future development.",
    image: "./assets/ShoppingList.jpg",
  },
  {
    title: "Maria Casino Project",
    text: "In this project, I developed the main header carousel, ensuring smooth and engaging transitions. I also implemented a fully responsive design, optimizing the user experience across all devices. Additionally, I integrated data dynamically into the website by connecting it to an API, ensuring real-time updates and seamless functionality.",
    image: "./assets/MariaCasino.jpg",
  },
  {
    title: "Email Marketing & Campaigns",
    text: "In my previous roles, I gained valuable experience in designing and developing EDMs (Email Design Mockups) for various companies. By leveraging high-standard HTML tables and CSS, I ensured optimal responsiveness across all devices and email clients, including all versions of Microsoft Outlook. Through multiple marketing campaigns, I refined my expertise in optimizing email designs for seamless rendering and a consistent user experience.",
    image: "./assets/elavon.jpg",
  },
];

function changeText() {
  const btn = document.querySelector(".startApp");
  const leftTitle = document.querySelector(".left-title");
  const leftText = document.querySelector(".left-text");
  const rightImage = document.querySelector(".rightContainer img");
  const navShopElement = document.querySelector(".shopElement");
  const navMsElement = document.querySelector(".msElement");
  const edmElement = document.querySelector(".edmElement");

  let count = 0;
  btn.addEventListener("click", () => {
    const slide = slidesData[count];
    setTimeout(() => {
      navShopElement.classList.add("custom-animation-nav");
      btn.disabled = true;
      ++countLength;
    });
    setTimeout(() => {
      navMsElement.classList.add("custom-animation-nav");
    }, 1000);
    setTimeout(() => {
      edmElement.classList.add("custom-animation-nav");
    }, 2000);
    setTimeout(() => {
      leftTitle.classList.add("custom-animation-left");
      leftText.classList.add("custom-animation-left");
      rightImage.classList.add("custom-animation-right");
    }, 3000);
    setTimeout(() => {
      leftTitle.classList.add("custom-animation-slideIn-left");
      leftText.classList.add("custom-animation-slideIn-left");
      rightImage.classList.add("custom-animation-slideIn-right");
      leftTitle.innerText = slide.title;
      leftText.innerText = slide.text;
      rightImage.src = slide.image;
    }, 4700);
    //Clearing animation for next iteration
    setTimeout(() => {
      navShopElement.classList.remove("custom-animation-nav");
      navMsElement.classList.remove("custom-animation-nav");
      edmElement.classList.remove("custom-animation-nav");
      leftTitle.classList.remove(
        "custom-animation-left",
        "custom-animation-slideIn-left"
      );
      leftText.classList.remove(
        "custom-animation-left",
        "custom-animation-slideIn-left"
      );
      rightImage.classList.remove(
        "custom-animation-right",
        "custom-animation-slideIn-right"
      );
      btn.disabled = false;
      btn.innerText = "Next slide";
    }, 5500);

    count = (count + 1) % slidesData.length;
  });
}
changeText();

// leftTitle.innerText = slide.title;
// leftText.innerText = slide.text;
// rightImage.src = slide.image;
