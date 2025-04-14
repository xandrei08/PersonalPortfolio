export function showBanners() {
  const bannerDiv = document.querySelector(".banners-content");
  const bannerOne = document.querySelector(".banner1");
  const bannerTwo = document.querySelector(".banner2");
  const bannerThree = document.querySelector(".banner3");
  const bannerFour = document.querySelector(".banner4");
  setTimeout(() => {
    bannerDiv.style.visibility = "visible";
    bannerDiv.classList.add("animate-banners");
  }, 11000);
  setTimeout(() => {
    bannerOne.style.visibility = "visible";
    bannerOne.classList.add("animate-banners");
  }, 12000);
  setTimeout(() => {
    bannerTwo.style.visibility = "visible";
    bannerTwo.classList.add("animate-banners");
  }, 13000);
  setTimeout(() => {
    bannerThree.style.visibility = "visible";
    bannerThree.classList.add("animate-banners");
  }, 14000);
  setTimeout(() => {
    bannerFour.style.visibility = "visible";
    bannerFour.classList.add("animate-banners");
  }, 15000);
  setTimeout(() => {
    bannerDiv.classList.remove("animate-banners");
    bannerDiv.classList.add("animate-bannersExit");
  }, 25000);
}
