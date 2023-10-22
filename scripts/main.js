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
  vendorText = document.getElementsByClassName("vendorSelected");
  vendorText[0].innerHTML =
    "<span>Work/Material request</span>: Whenever a client wants to start, a work request notifications with date and time for materials and artisians will be promted through their app.";

  vendorText[1].innerHTML =
    "<span>Project Management:</span> Work on multiple projects ...<span>see more</span>";

  vendorText[2].innerHTML =
    "<span>Payment:</span> Get paid for the work step by step ...<span>see more</span>";

  vendorText[3].innerHTML =
    "<span>Tutorials:</span> Explore the video tutorials to learn more ...<span>see more</span>";
});

supervisorApp.addEventListener("click", () => {
  supervisorApp.classList.add("selected");
  vendorApp.classList.remove("selected");
  appDesc.forEach((element) => {
    element.classList.add("supervisorSelected");
    element.classList.remove("vendorSelected");
  });
  supervisorText = document.getElementsByClassName("supervisorSelected");
  console.log("🚀 ~ file: main.js:33 ~ supervisorText ->", supervisorText);
  supervisorText[0].innerHTML = "Text changes!";

  supervisorText[1].innerHTML = "Text changes!";

  supervisorText[2].innerHTML = "Text changes!";

  supervisorText[3].innerHTML = "Text changes!";
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
