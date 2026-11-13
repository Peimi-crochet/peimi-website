document.addEventListener('DOMContentLoaded', () => {
  const sceneByProduct = {
    'blue-wave-pet-bandana.webp': 'pet-scene-blue-wave-pet-bandana.webp',
    'fruit-flower-pet-collar.webp': 'pet-scene-fruit-flower-pet-collar.webp',
    'garden-motif-pet-collar.webp': 'pet-scene-garden-motif-pet-collar.webp',
    'puff-flower-pet-collar.webp': 'pet-scene-puff-flower-pet-collar.webp',
    'full-puff-pet-necklace.webp': 'pet-scene-full-puff-pet-necklace.webp',
    'tulip-pet-necklace.webp': 'pet-scene-tulip-pet-necklace.webp',
    'strawberry-cone-dog-hat.webp': 'pet-scene-strawberry-cone-dog-hat.webp',
    'cartoon-pet-bib.webp': 'pet-scene-cartoon-pet-bib.webp',
    'puff-flower-dog-hat.webp': 'pet-scene-puff-flower-dog-hat.webp',
    'bunny-ear-dog-hat.webp': 'pet-scene-bunny-ear-dog-hat.webp',
    'lamb-puppy-hat.webp': 'pet-scene-lamb-puppy-hat.webp',
    'frog-monster-pet-hat.webp': 'pet-scene-frog-monster-pet-hat.webp',
    'flower-petal-dog-hat.webp': 'pet-scene-flower-petal-dog-hat.webp',
    'fruit-vegetable-pet-hat.webp': 'pet-scene-fruit-vegetable-pet-hat.webp',
    'grape-flower-pet-hat.webp': 'pet-scene-grape-flower-pet-hat.webp',
    'christmas-pet-hat-collar-set.webp': 'pet-scene-christmas-pet-hat-collar-set.webp',
    'animal-heart-pet-hat.webp': 'pet-scene-animal-heart-pet-hat.webp',
    'crochet-pet-scarf.webp': 'pet-scene-crochet-pet-scarf.webp',
    'valentine-pet-accessory-set.webp': 'pet-scene-valentine-pet-accessory-set.webp',
    'solid-color-pet-bandana.webp': 'pet-scene-solid-color-pet-bandana.webp',
    'cake-polka-dot-pet-set.webp': 'pet-scene-cake-polka-dot-pet-set.webp',
    'blue-yellow-bow-pet-set.webp': 'pet-scene-blue-yellow-bow-pet-set.webp'
  };

  document.querySelectorAll('.pet-accessories-page .product-card > img').forEach((primary) => {
    const productFile = new URL(primary.src, window.location.href).pathname.split('/').pop();
    const sceneFile = sceneByProduct[productFile];
    if (!sceneFile) return;

    const visual = document.createElement('div');
    visual.className = 'product-visual';
    primary.classList.add('primary');
    primary.parentNode.insertBefore(visual, primary);
    visual.appendChild(primary);

    const scene = document.createElement('img');
    scene.className = 'scene';
    scene.src = `/assets/pet-accessories/${sceneFile}`;
    scene.alt = `${primary.alt || 'Crochet pet accessory'} shown on a pet`;
    scene.loading = 'lazy';
    scene.decoding = 'async';
    visual.appendChild(scene);
  });
});
