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
