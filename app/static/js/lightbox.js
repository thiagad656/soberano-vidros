document.addEventListener("DOMContentLoaded", function () {
  console.log("Lightbox JS carregado");

  const triggers = document.querySelectorAll(".lightbox-trigger");

  // Cria a lightbox
  const lightbox = document.createElement("div");
  lightbox.classList.add("custom-lightbox");
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="lightbox-close">&times;</span>
      <img class="lightbox-img" src="" alt="">
      <div class="lightbox-caption">
        <h3 class="lightbox-title"></h3>
        <p class="lightbox-desc"></p>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector(".lightbox-img");
  const title = lightbox.querySelector(".lightbox-title");
  const desc = lightbox.querySelector(".lightbox-desc");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();

      img.src = this.href;
      title.textContent = this.dataset.title;
      desc.textContent = this.dataset.description;

      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
});
