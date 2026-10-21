const dialog = document.querySelector('dialog');
const content = document.querySelector('#dialog-content');
let previousFocus;
function openDialog() { previousFocus = document.activeElement; dialog.showModal(); }
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => previousFocus?.focus());
function heading(text) { const element = document.createElement('h2'); element.id = 'dialog-title'; element.textContent = text.toLowerCase(); return element; }
function paragraph(text) { const element = document.createElement('p'); element.textContent = text.toLowerCase(); return element; }
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const name = button.dataset.project;
  const link = document.createElement('a');
  link.className = 'contact-button';
  link.href = `mailto:jmanaois704@gmail.com?subject=${encodeURIComponent(`Let’s talk about ${name}`)}`;
  link.textContent = 'get in touch ↗';
  content.replaceChildren(heading(name), paragraph('The full story is coming soon. Project details, photographs, and links will be added here.'), paragraph('The cover is a placeholder illustration, not a screenshot of the project.'), link);
  openDialog();
}));
document.querySelectorAll('.photo').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img').cloneNode();
  image.removeAttribute('loading');
  content.replaceChildren(image, heading(button.dataset.title), paragraph('Sample image from Unsplash — to be replaced with personal photography.'));
  openDialog();
}));
document.querySelector('#year').textContent = new Date().getFullYear();

