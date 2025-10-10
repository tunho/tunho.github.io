document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach((img) => {
    const title = img.getAttribute('alt') || '';
    img.setAttribute('data-overlay-text', title);
  });
});
