document.addEventListener('DOMContentLoaded', function() {
    // Animación para elementos al cargar la página
    const animatedElements = document.querySelectorAll('.about-text, .card, .carousel-item, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
    });
    
    // Mejorar la funcionalidad del formulario
    const formulario = document.querySelector('.formulario');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-enviar');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular envío
            setTimeout(() => {
                // Mostrar mensaje de éxito
                const agradecimiento = document.querySelector('.agradecimiento');
                agradecimiento.style.display = 'block';
                agradecimiento.style.animation = 'fadeInUp 0.8s ease-out';
                
                // Restablecer formulario
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    agradecimiento.style.display = 'none';
                }, 5000);
            }, 2000);
        });
    }
    
    // Mejorar la navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});