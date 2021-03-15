const button = document.querySelector('button')
const h1 = document.querySelector('h1')

button.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if (r + g + b <= 200) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})

