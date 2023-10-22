const vendorApp = document.getElementById("vendorApp");
const supervisorApp = document.getElementById("supervisorApp");
const appDesc = document.querySelectorAll("#appDesc > p");

vendorApp.addEventListener("click", () => {
  vendorApp.classList.add("selected");
  supervisorApp.classList.remove("selected");
  appDesc.forEach((element) => {
    element.classList.add("vendorSelected");
    element.classList.remove("supervisorSelected");
  });
});

supervisorApp.addEventListener("click", () => {
  supervisorApp.classList.add("selected");
  vendorApp.classList.remove("selected");
  appDesc.forEach((element) => {
    element.classList.add("supervisorSelected");
    element.classList.remove("vendorSelected");
  });
});

const timePeriod = document.getElementById("timePeriod");
const yearly = document.getElementById("yearly");
const monthly = document.getElementById("monthly");
const basicPrice = document.getElementById("basicPrice");
const commercialPrice = document.getElementById("commercialPrice");

timePeriod.addEventListener("change", function () {
  if (this.checked) {
    yearly.classList.add("timePeriodSelected");
    monthly.classList.remove("timePeriodSelected");
    basicPrice.innerHTML = "$3,000";
    commercialPrice.innerHTML = "$5,000";
  } else {
    monthly.classList.add("timePeriodSelected");
    yearly.classList.remove("timePeriodSelected");
    basicPrice.innerHTML = "$270";
    commercialPrice.innerHTML = "$450";
  }
});

const left = document.getElementById("left");
const right = document.getElementById("right");
const slides = document.getElementsByClassName("slide");

const count = slides.length;

let x = 0;
left.addEventListener("click", () => {
  for (let item of slides) {
    item.animate(
      { transform: `translate(${x}px)`, transform: `translate(${x + 800}px` },
      { duration: 300, fill: "forwards" }
    );
  }
  x += 800;
  if (x === 800) {
    left.style.display = "none";
    right.style.display = "block";
  } else {
    left.style.display = "block";
    right.style.display = "block";
  }
});

right.addEventListener("click", () => {
  for (let item of slides) {
    item.animate(
      { transform: `translate(${x}px)`, transform: `translate(${x - 800}px` },
      { duration: 300, fill: "forwards" }
    );
  }
  x -= 800;
  if (x === -800) {
    right.style.display = "none";
    left.style.display = "block";
  } else {
    left.style.display = "block";
    right.style.display = "block";
  }
});
