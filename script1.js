document.addEventListener('DOMContentLoaded', function () {
  // Modal
  const modalTriggers = document.querySelectorAll('.view-project-btn');
  const modalCloseBtns = document.querySelectorAll('.close');
  const modals = document.querySelectorAll('.modal');

  modalTriggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => {
      modals[index].style.display = 'block';
    });
  });

  modalCloseBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modals[index].style.display = 'none';
    });
  });

  window.addEventListener('click', (e) => {
    modals.forEach((modal) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Form Validation
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill in all fields.');
    }
  });

  // Scroll to Top Button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
