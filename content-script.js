
setInterval(() => {
  const pagelets = document.querySelectorAll('div[data-pagelet]');
  for (let i = pagelets.length - 1; i >= 0; i--) {
    const item = pagelets.item(i);
    if (item.innerText.toLowerCase().includes('suggested for you')
      || item.innerText.toLowerCase().includes('reels and short')
      || item.getElementsByClassName('sponsored_ad').length) {
      item.remove();
    }
  }
}, 1000);
