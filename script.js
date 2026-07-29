const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const yearTarget = document.querySelector("[data-current-year]");
const contactForm = document.querySelector("[data-contact-form]");
const formMessage = document.querySelector("[data-form-message]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

function closeMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.classList.remove("is-open");
  mobileMenu.classList.remove("is-open");
  body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    closeMobileMenu();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function updateActiveLink() {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("is-active", isActive);
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });
updateActiveLink();

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    formMessage.classList.remove("is-error");

    if (!name || !email || !message) {
      formMessage.textContent = "Preencha nome, e-mail e mensagem para enviar.";
      formMessage.classList.add("is-error");
      return;
    }

    if (!emailIsValid) {
      formMessage.textContent = "Informe um e-mail válido.";
      formMessage.classList.add("is-error");
      return;
    }

    const whatsappMessage = [
      "Olá, Lucas. Vim pelo seu portfólio.",
      "",
      `Nome: ${name}`,
      `E-mail: ${email}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/69992791505?text=${encodeURIComponent(whatsappMessage)}`;

    formMessage.textContent = "Abrindo WhatsApp com sua mensagem...";
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    contactForm.reset();
  });
}
