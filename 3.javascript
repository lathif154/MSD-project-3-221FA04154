document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('container');
    var text = document.getElementById('text');
   
    // Toggle the 'active' class on both the button and container
    this.classList.toggle('active');
    container.classList.toggle('active');
   
    // Change text content of the button
    if (this.classList.contains('active')) {
        this.textContent = 'submit Again!';
        text.textContent = 'The state has changed!';
    } else {
        this.textContent = 'submit Me!';
        text.textContent = 'I am lathifbasha,cse department,currently pursuing in Vignan university';
    }
});