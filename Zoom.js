const galleryItems = document.querySelectorAll('.gallery-item');

document.addEventListener('click', (event) => {
  const zoomedItem = event.target.closest('.gallery-item.is-zoomed');

  if (zoomedItem) {
    zoomedItem.classList.remove('is-zoomed');
    return;
  }

  if (event.target.tagName === 'IMG' && event.target.closest('.gallery-item')) {
    const clickedItem = event.target.closest('.gallery-item');
    
    galleryItems.forEach(item => item.classList.remove('is-zoomed'));
    clickedItem.classList.add('is-zoomed');
  }
});

