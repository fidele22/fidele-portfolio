
  const projectList = document.getElementById("projectList");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let scrollAmount = 0;
  const scrollStep = 380; // Scroll step in pixels
  const autoScrollSpeed = 3000; // Time in ms

  // Auto scroll functionality
  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= projectList.scrollWidth - projectList.clientWidth) {
      scrollAmount = 0; // Reset when reaching the end
    }
    projectList.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }

  // Manual scrolling with buttons
  prevBtn.addEventListener("click", () => {
    projectList.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    projectList.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  // Start auto-scroll
  setInterval(autoScroll, autoScrollSpeed);

