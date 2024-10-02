const form = document.querySelector('form');
const results = document.querySelector('#results');
const kyaHai = document.querySelector('#kya-hai');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        results.innerHTML = 'Please enter a valid height in cm';
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = 'Please enter a valid weight in kg';
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is: ${bmi}</span>`;

    kyaHai.innerHTML = '';

    if (bmi < 18.6) {
        kyaHai.innerHTML = `
            <div>Under-weight</div>
            <div>Under-weight</div>
            <div>Under-weight</div>
            <div>Under-weight</div>
        `;
    } else if (bmi > 24.9) {
        kyaHai.innerHTML = `
            <div>Over-weight</div>
            <div>Over-weight</div>
            <div>Over-weight</div>
            <div>Over-weight</div>
        `;
    } else {
        kyaHai.innerHTML = `
            <div>Perfect cutie</div>
            <div>Perfect cutie</div>
            <div>Perfect cutie</div>
            <div>Perfect cutie</div>
        `;
    }
});
