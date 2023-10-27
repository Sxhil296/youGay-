// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('.form');
//     const resultText = document.createElement('p');
//     resultText.classList.add('result');
//     document.querySelector('.container').appendChild(resultText);

//     const submitBtn = document.getElementById('submitBtn');
//     submitBtn.addEventListener('click', function (e) {
//         e.preventDefault(); // Prevent the default form submission

//         const name = document.getElementById('name').value;
//         const selectedGenre = document.getElementById('genre').value;
//         const selectedColor = document.getElementById('color').value;
//         const selectedSnapchat = document.querySelector('input[name="snapchat"]:checked');

//         if (selectedGenre === 'romance' && selectedColor === 'pink' && selectedSnapchat && selectedSnapchat.value === 'yes') {
//             resultText.textContent = 'SAD!' + name, + 'You are GAY!';
//         } else {
//             resultText.textContent = 'CONGRATULATIONS!' + name, + 'You are NOT GAY!';
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const resultText = document.createElement('p');
    resultText.classList.add('result');
    document.querySelector('.container').appendChild(resultText);

    // Add a click event listener to the submit button
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const selectedGenre = document.getElementById('genre').value;
        const selectedColor = document.getElementById('color').value;
        const selectedSnapchat = document.querySelector('input[name="snapchat"]:checked');

        if (selectedGenre === 'romance' && selectedColor === 'pink' && selectedSnapchat && selectedSnapchat.value === 'yes') {
            resultText.textContent = `SAD! ${name}, you are GAYYY!`
        } else {
            resultText.textContent =`CONGRATULATIONS! ${name}, you are NOT GAYYY!`
        }
    });
});
