document.addEventListener('DOMContentLoaded', function() {
    // Make navigation interactive
    const navItems = document.querySelectorAll('.nav div');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });

        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });

        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

    // Make auth buttons interactive
    const authButtons = document.querySelectorAll('.auth-buttons .button');
    authButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked: ${this.textContent}`);
        });
    });

    // Make form inputs interactive
    const formInputs = document.querySelectorAll('.form .input');
    formInputs.forEach(input => {
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.placeholder = input.previousElementSibling.textContent;
        input.appendChild(inputElement);
    });

    // Make form submission interactive
    const form = document.querySelector('.form');
    const submitButton = form.querySelector('.button');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        const formData = {};
        form.querySelectorAll('input').forEach(input => {
            formData[input.placeholder] = input.value;
        });
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    });

    // Make features interactive
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        const iphone = document.querySelector('.graphic img');
        const automatedBox = document.querySelector('.info-box.automated');
        const performanceBox = document.querySelector('.info-box.performance');
    
        // Set initial styles
        iphone.style.transform = 'translateY(100%)';
        iphone.style.opacity = '0';
        iphone.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    
        automatedBox.style.transform = 'translateY(100%)';
        automatedBox.style.opacity = '0';
        automatedBox.style.transition = 'transform 1s ease-out 0.5s, opacity 1s ease-out 0.5s';
    
        performanceBox.style.transform = 'translateY(100%)';
        performanceBox.style.opacity = '0';
        performanceBox.style.transition = 'transform 1s ease-out 1s, opacity 1s ease-out 1s';
    
        // Trigger animation after a short delay
        setTimeout(() => {
            iphone.style.transform = 'translateY(0)';
            iphone.style.opacity = '1';
            automatedBox.style.transform = 'translateY(0)';
            automatedBox.style.opacity = '1';
            performanceBox.style.transform = 'translateY(0)';
            performanceBox.style.opacity = '1';
        }, 100);
    });
});
