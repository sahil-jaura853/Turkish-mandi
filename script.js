const yearEl = document.getElementById("year");
const callBtn = document.getElementById("callBtn");
const callOut = document.getElementById("callOut");

yearEl.textContent = new Date().getFullYear();

callBtn?.addEventListener("click", () => {
  callOut.textContent = "Call now: +1 (555) 123-4567";
  callOut.classList.remove("hidden");
  callBtn.setAttribute("disabled", "true");
  callBtn.textContent = "Number Shown";
});
