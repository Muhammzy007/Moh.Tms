// smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function () {
  const nav = document.getElementById('navLinks');
  if (nav) nav.classList.toggle('hidden');
});

// profile photo preview
const profilePhotoInput = document.getElementById('profilePhoto');
profilePhotoInput?.addEventListener('change', function () {
  if (!this.files || !this.files[0]) return;
  const reader = new FileReader();
  reader.onload = function (ev) {
    let img = document.querySelector('.photo-preview');
    if (!img) {
      img = document.createElement('img');
      img.className = 'photo-preview w-40 h-40 rounded-full mx-auto mb-4 object-cover';
      const area = document.querySelector('.photo-upload-area');
      if (area) area.insertBefore(img, area.firstChild);
    }
    img.src = ev.target.result;
  };
  reader.readAsDataURL(this.files[0]);
});

// year in footer
document.getElementById('year').textContent = new Date().getFullYear();
