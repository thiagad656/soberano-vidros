document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
  
    questions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
  
        const icon = btn.querySelector('.icon');
        icon.textContent = item.classList.contains('active') ? '–' : '+';
      });
    });
  });
  