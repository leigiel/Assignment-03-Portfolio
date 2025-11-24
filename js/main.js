

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById('year').textContent = new Date().getFullYear();

 
  const navToggle = document.getElementById('navToggle');
  const mobilePanel = document.getElementById('mobilePanel');

  navToggle && navToggle.addEventListener('click', () => {
    mobilePanel.classList.toggle('hidden');
  });


  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();


    if (!name || !email || !message) {
      formMsg.textContent = 'Please fill name, email and message.';
      formMsg.style.color = 'crimson';
      return;
    }


    formMsg.textContent = 'Message ready to send. (Form handling demo — integrate backend to actually send.)';
    formMsg.style.color = 'green';
    form.reset();


    form.querySelector('[name="name"]').focus();
  });


  document.querySelectorAll('#mobilePanel a').forEach(a => {
    a.addEventListener('click', () => {
      mobilePanel.classList.add('hidden');
    });
  });
});
