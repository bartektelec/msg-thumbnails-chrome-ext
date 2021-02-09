document.querySelectorAll('[role="gridcell"]>a').forEach(link => {
if(link.textContent.includes('youtu')) {
    const vidId = link.href.match(/(\w|\d|\_){11}/g);
    link.innerHTML += `<img style="width: 100%; margin-top: 1rem" src="https://img.youtube.com/vi/${vidId[0]}/0.jpg" alt="video thumbnail"/>`
}
})