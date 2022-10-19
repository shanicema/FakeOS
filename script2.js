Array.from(document.getElementsByClassName('box')).forEach(box => {
    box.addEventListener('click', () => open(box))
    box.querySelector('.box__header__close').addEventListener('click', (event) => {
        event.stopPropagation();
        close(box);
    })
});