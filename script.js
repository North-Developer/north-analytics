document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple form validation could go here

    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
});
