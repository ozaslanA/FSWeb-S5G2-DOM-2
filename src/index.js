import "./less/index.less";

// Kodlar buraya gelecek!
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

const acilis = document.getElementById("login");
window.addEventListener("mauseover", (event) => {
  setTimeout(() => {
    acilis.style.display = "none";
  }, 2000);
});

// click
const images = document.querySelectorAll("img");
images.forEach((img) => {
  img.addEventListener("click", (event) => {
    img.style.filter = "grayscale(100%)";
  });
});

//dblclick
images.forEach((img) => {
  img.addEventListener("dblclick", (event) => {
    img.style.filter = "unset";
  });
});

//mouseover
const alt = document.querySelectorAll(".destination");
alt.forEach((destination) => {
  destination.addEventListener("mouseover", (event) => {
    destination.style.padding = "50px 0 0 16px ";

    destination.style.backgroundColor = "#ddd";
  });
  destination.addEventListener("mouseleave", (event) => {
    destination.style.padding = "40px";
    destination.style.backgroundColor = "#fff";
  });
});

//focus
let buttonFooter = document.querySelector(".contact-part");
buttonFooter.addEventListener("focus", () => {
  buttonFooter.style.color = "red";
  buttonFooter.style.backgroundColor = "#fff";
  buttonFooter.style.fontSize = " 2rem";
});

//wheel
const imgWheel = document.querySelectorAll("footer");
imgWheel.forEach((footer) => {
  footer.addEventListener("wheel", (event) => {
    footer.style.backgroundColor = "yellow";
  });
});
