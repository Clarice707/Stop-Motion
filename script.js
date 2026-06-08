
// MODO CLARO/ESCURO


const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggle.textContent = "☀️ Modo claro";
  } else {
    toggle.textContent = "🌙 Modo escuro";
  }
});

// GALERIA INTERATIVA

const imagens = document.querySelectorAll(".galeria figure");

imagens.forEach((figure) => {
  figure.addEventListener("click", (event) => {
    
    // evita conflito se clicar no coração
    if (event.target.classList.contains("favorito")) {
      figure.classList.toggle("favorito-ativo");
      return;
    }

    figure.classList.toggle("ativo");
  });
});