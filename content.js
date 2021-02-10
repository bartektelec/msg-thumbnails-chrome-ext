console.info('Messenger Thumbnail Extension on.');

const appObserver = new MutationObserver((mutationList, observer) => {
  mutationList.forEach(mutation => {
    if ([...mutation.addedNodes].some(x => x.dataset?.testid === 'thumbnail'))
      return;

    if (
      [...mutation.addedNodes].some(
        x => x.innerHTML?.includes('href=') && x.textContent?.includes('youtu')
      )
    ) {
      replaceMessages();
    }
  });
});

appObserver.observe(document.querySelector('body'), {
  childList: true,
  attributes: true,
  subtree: true,
});

function replaceMessages() {
  document.querySelectorAll('[role="gridcell"]>a').forEach(link => {
    if (link.textContent.includes('youtu')) {
      const prevText = link.textContent;
      const vidId = prevText.match(/(\w|\d|\_){11}/g);
      link.innerHTML = `<img data-testid="thumbnail" style="width: 100%; margin-top: 1rem" src="https://img.youtube.com/vi/${vidId[0]}/0.jpg" alt="video thumbnail"/><span data-testid="thumbnail">${prevText}</span>`;
    }
  });
}
