const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.querySelector('.question').addEventListener('click', () => {
    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove('active');
      }
    });

    faq.classList.toggle('active');
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    faqs.forEach(faq => faq.classList.remove('active'));
  }
});
