const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        body.style.backgroundColor = color;

        const h1s = document.querySelectorAll('h1');
        h1s.forEach((h1) => {
            if (color != 'white') {
                h1.style.color = 'white';
                document.querySelector('h2').style.color = 'white';
            } else {
                h1.style.color = 'black';
                document.querySelector('h2').style.color = 'black';
            }
        });
    });
})