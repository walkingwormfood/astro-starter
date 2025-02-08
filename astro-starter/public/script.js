document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
        img.addEventListener('click', function(e) {
            const modal = document.createElement('div');
            modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;';
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'X';
            closeBtn.style.cssText = 'position:absolute;top:10px;right:10px;background:#fff;border:none;padding:10px;font-size:16px;cursor:pointer;';
            closeBtn.onclick = () => document.body.removeChild(modal);

            modal.appendChild(modalImg);
            modal.appendChild(closeBtn);
            document.body.appendChild(modal);
        });
    });
});