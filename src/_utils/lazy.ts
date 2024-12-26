import 'intersection-observer';

let loaded = false;

export function observeInit() {
  if (loaded) return;
  loaded = true;
  console.log('lazyload');
  const lazyImages =
    document.querySelectorAll<HTMLImageElement>('img[data-src]');

  const loadImage = (image: HTMLImageElement) => {
    const src = image.getAttribute('data-src');
    if (!src) return;

    image.src = src;
    image.removeAttribute('data-src');
  };

  const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadImage(entry.target as HTMLImageElement);
        observer.unobserve(entry.target);
      }
    });
  });

  lazyImages.forEach((image) => {
    intersectionObserver.observe(image);
  });

  // MutationObserver 部分，用于动态加载新的图片元素
  const mutationObserver = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLImageElement &&
            node.hasAttribute('data-src')
          ) {
            intersectionObserver.observe(node);
          }
        });
      }
    }
  });

  const config: MutationObserverInit = { childList: true, subtree: true };
  mutationObserver.observe(document.body, config);
}
