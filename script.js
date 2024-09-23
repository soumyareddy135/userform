document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Store data locally (for now, you can expand this to save in a backend later)
    localStorage.setItem('userData', JSON.stringify({ name, email, phone }));

    // Show success message
    document.getElementById('responseMessage').innerText = 'Submission is successful!';

    // Reset the form
    document.getElementById('userForm').reset();
});
