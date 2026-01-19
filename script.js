function toggleMenu() {
  const links = document.getElementById("navLinks");
  if (!links) return;
  links.classList.toggle("open");
}

// FAQ accordion
function toggleAcc(btn) {
  btn.classList.toggle("open");
  const panel = btn.nextElementSibling;
  if (!panel) return;

  const open = panel.style.display === "block";
  panel.style.display = open ? "none" : "block";
}

// Close mobile nav when clicking a link
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;

  const links = document.getElementById("navLinks");
  if (links) links.classList.remove("open");
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
