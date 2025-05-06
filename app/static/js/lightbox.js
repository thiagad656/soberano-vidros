document.querySelectorAll('.mosaic-item').forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;
        const description = this.querySelector('p').textContent;
        
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close-btn">&times;</span>
                <img src="${imgSrc}" alt="${imgAlt}">
                <div class="lightbox-footer">
                    <h3>${imgAlt}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close-btn').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});