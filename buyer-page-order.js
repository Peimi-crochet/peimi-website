(() => {
  const products = document.querySelector('.products-section');
  const insight = document.querySelector('.insight-section');
  const shell = insight?.querySelector('.insight-shell');
  if (!products || !insight || !shell || shell.children.length < 2) return;

  const summary = shell.children[0];
  const details = shell.children[1];
  const insightIsBeforeProducts = Boolean(
    insight.compareDocumentPosition(products) & Node.DOCUMENT_POSITION_FOLLOWING
  );

  const createSection = (content, className) => {
    const section = document.createElement('section');
    section.className = `insight-section ${className}`;
    const inner = document.createElement('div');
    inner.className = 'insight-shell';
    inner.appendChild(content);
    section.appendChild(inner);
    return section;
  };

  if (insightIsBeforeProducts) {
    products.insertAdjacentElement(
      'afterend',
      createSection(details, 'buyer-details-section')
    );
  } else {
    products.insertAdjacentElement(
      'beforebegin',
      createSection(summary, 'buyer-summary-section')
    );
  }
})();
