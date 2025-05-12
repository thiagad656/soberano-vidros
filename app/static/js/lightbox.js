document.addEventListener("DOMContentLoaded", () => {
    // Cria o elemento da lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
  
    // Conteúdo interno da lightbox (imagem e botão de fechar)
    lightbox.innerHTML = `
      <span class="lightbox-close" aria-label="Fechar imagem">&times;</span>
      <img src="" alt="Imagem ampliada" />
    `;
  
    // Adiciona a lightbox ao final do body
    document.body.appendChild(lightbox);
  
    const lightboxImage = lightbox.querySelector("img");
    const closeButton = lightbox.querySelector(".lightbox-close");
  
    // Ativa a lightbox ao clicar em uma imagem com a classe .lightbox-trigger
    document.querySelectorAll(".lightbox-trigger").forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Impede o redirecionamento
        const imageUrl = link.getAttribute("href");
        lightboxImage.src = imageUrl;
        lightbox.style.display = "flex";
      });
    });
  
    // Fecha a lightbox ao clicar no botão de fechar
    closeButton.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImage.src = ""; // Limpa a imagem ao fechar
    });
  
    // Fecha a lightbox ao clicar fora da imagem
    lightbox.addEventListener("click", event => {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
        lightboxImage.src = "";
      }
    });
  });
  