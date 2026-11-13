document.addEventListener('DOMContentLoaded', () => {
  const sceneByIndex = [
    'collar', 'collar', 'collar', 'collar', 'collar', 'collar',
    'cone-hat', 'collar', 'cone-hat', 'character-hat', 'character-hat',
    'character-hat', 'cone-hat', 'cone-hat', 'cone-hat', 'seasonal-set',
    'character-hat', 'collar', 'seasonal-set', 'collar', 'seasonal-set',
    'seasonal-set'
  ];

  document.querySelectorAll('.pet-accessories-page .product-card > img').forEach((primary, index) => {
    const sceneName = sceneByIndex[index];
    if (!sceneName) return;

    const visual = document.createElement('div');
    visual.className = 'product-visual';

    primary.classList.add('primary');
    primary.parentNode.insertBefore(visual, primary);
    visual.appendChild(primary);

    const scene = document.createElement('img');
    scene.className = 'scene';
    scene.src = `/assets/pet-accessories/pet-scene-${sceneName}.webp`;
    scene.alt = '';
    scene.loading = 'lazy';
    scene.decoding = 'async';
    scene.setAttribute('aria-hidden', 'true');
    visual.appendChild(scene);
  });
});
