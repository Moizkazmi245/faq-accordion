const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
  const question = faq.querySelector('.question');
  const icon = faq.querySelector('.icon');

  question.addEventListener('click', () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove('active');
        item.querySelector('.question').setAttribute('aria-expanded', 'false');
        item.querySelector('.icon').textContent = '➕';
      }
    });

    const isActive = faq.classList.toggle('active');
    question.setAttribute('aria-expanded', isActive);
    icon.textContent = isActive ? '➖' : '➕';
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    faqs.forEach((faq) => {
      faq.classList.remove('active');
      faq.querySelector('.question').setAttribute('aria-expanded', 'false');
      faq.querySelector('.icon').textContent = '➕';
    });
  }
});
