const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('close-btn');
const registerForm = document.getElementById('registration-form');

openModal.addEventListener('click', () => {
    console.log('open modal clicked');
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    console.log('close modal clicked');
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all fields.');
    }
    else {
        alert(`Thank you for registering, ${name}!`);
        modal.style.display = 'none';
        document.getElementById('registration-form').reset();
    }
});


