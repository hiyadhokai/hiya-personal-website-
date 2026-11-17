const cards = document.querySelectorAll('.now-card');
// Small hover nudge for a little personality on pointer devices.
cards.forEach((card) => {
  card.addEventListener('pointerenter', () => card.classList.add('is-hovered'));
  card.addEventListener('pointerleave', () => card.classList.remove('is-hovered'));
});
