document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    elements.forEach((element) => observer.observe(element));
  }

  const saveFab = document.getElementById("saveFab");
  const saveOverlay = document.getElementById("saveOverlay");
  const saveClose = document.getElementById("saveClose");
  let previouslyFocused = null;

  const closeSaveMenu = () => {
    saveOverlay.classList.remove("is-open");
    saveOverlay.setAttribute("aria-hidden", "true");
    saveFab.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleSaveKeydown);
    if (previouslyFocused) previouslyFocused.focus();
  };

  const handleSaveKeydown = (event) => {
    if (event.key === "Escape") closeSaveMenu();
  };

  const openSaveMenu = () => {
    previouslyFocused = document.activeElement;
    saveOverlay.classList.add("is-open");
    saveOverlay.setAttribute("aria-hidden", "false");
    saveFab.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleSaveKeydown);
    saveClose.focus();
  };

  saveFab.addEventListener("click", openSaveMenu);
  saveClose.addEventListener("click", closeSaveMenu);
  saveOverlay.addEventListener("click", (event) => {
    if (event.target === saveOverlay) closeSaveMenu();
  });
});
