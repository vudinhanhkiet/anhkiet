document.getElementById('year').textContent = new Date().getFullYear();
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    menuLinks.forEach(function (item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (name === '') {
    formMessage.textContent = 'Vui lòng nhập họ tên!';
    return;
  }
  if (email === '') {
    formMessage.textContent = 'Vui lòng nhập email!';
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.textContent = 'Email không đúng định dạng!';
    return;
  }
  if (message === '') {
    formMessage.textContent = 'Vui lòng nhập nội dung liên hệ!';
    return;
  }
  formMessage.textContent = 'Đã gửi thông tin liên hệ!';
  contactForm.reset();
});
const darkMode = document.getElementById('darkMode');
darkMode.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});
