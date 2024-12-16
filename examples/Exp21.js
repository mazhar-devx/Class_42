var form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}
function handleSubmit(event) {
    event.preventDefault();
    var form = document.getElementById('myForm');
    var formData = {
        fname: form.elements.namedItem('fname').value,
        Iname: form.elements.namedItem('lname').value,
        email: form.elements.namedItem('email').value,
    };
    console.log('Form Data:', formData);
}
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
// npm install -g typescript
