console.log("DOM ready!")


// Event listener to open and close the puzzle-d modal
puzzledTitle = document.querySelector(".puzzled-link");
puzzledModal = document.querySelector(".puzzled-display");
puzzleClose = document.querySelector(".puzzle-close")

puzzledTitle.addEventListener('click', () => {
  puzzledModal.style.display = "block"
});

puzzleClose.addEventListener('click', () => {
  puzzledModal.style.display = "none"
});

// Event listener to open and close the neighborhood eats modal
neighborhoodTitle = document.querySelector(".neighborhood-link");
neighborhoodModal = document.querySelector(".neighborhood-display");
neighborhoodClose = document.querySelector(".neighborhood-close");

neighborhoodTitle.addEventListener('click', () => {
  neighborhoodModal.style.display = "block"
})

neighborhoodClose.addEventListener('click', () => {
  neighborhoodModal.style.display = "none"
})
