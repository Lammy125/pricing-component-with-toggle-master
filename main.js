const toggleButton = document.getElementById("toggleButton");
const basicPrice = document.querySelector(".cardOne .price");
const professionalPrice = document.querySelector(".cardTwo .priceTwo");
const masterPrice = document.querySelector(".cardThree .price");

const annualBasicPrice = "199.99";
const annualProfessionalPrice = "249.99";
const annualMasterPrice = "399.99";

const monthlyBasicPrice = "19.99";
const monthlyProfessionalPrice = "24.99";
const monthlyMasterPrice = "39.99";

toggleButton.addEventListener("change", function () {
  if (toggleButton.checked) {
    // Apply discounted prices
    basicPrice.textContent = monthlyBasicPrice;
    professionalPrice.textContent = monthlyProfessionalPrice;
    masterPrice.textContent = monthlyMasterPrice;
  } else {
    // Revert to default prices
    basicPrice.textContent = annualBasicPrice;
    professionalPrice.textContent = annualProfessionalPrice;
    masterPrice.textContent = annualMasterPrice;
  }
});
