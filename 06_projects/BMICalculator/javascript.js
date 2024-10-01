const form = document.querySelector('form');
const results = document.querySelector('#results');

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
});
