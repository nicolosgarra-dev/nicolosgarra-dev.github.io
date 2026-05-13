/**
 * Contact Form Handler - Terminal Edition
 * Manages the contact form visibility and AJAX submission to Formspree.
 */

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-contact-form');
    const formContainer = document.getElementById('contact-form-container');
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const statusText = document.getElementById('status-text');

    // Toggle Form Visibility
    toggleBtn.addEventListener('click', () => {
        const isHidden = formContainer.classList.contains('hidden');
        if (isHidden) {
            formContainer.classList.remove('hidden');
            formContainer.classList.add('animate-in', 'fade-in', 'duration-500');
            toggleBtn.innerHTML = '<span class="material-symbols-outlined text-primary">close</span> Close_Terminal';
        } else {
            formContainer.classList.add('hidden');
            toggleBtn.innerHTML = '<span class="material-symbols-outlined text-outline-variant group-hover:text-primary">alternate_email</span> Send_Message.sh';
        }
    });

    // Handle Form Submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Update Status to Loading
        formStatus.classList.remove('hidden');
        statusText.textContent = 'ESTABLISHING_CONNECTION...';
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING...';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                statusText.textContent = 'TRANSMISSION_SUCCESSFUL. SYSTEM_ACKNOWLEDGED.';
                statusText.classList.add('primary-accent');
                contactForm.reset();
                submitBtn.textContent = 'SENT';
                
                // Hide form after delay
                setTimeout(() => {
                    formContainer.classList.add('hidden');
                    toggleBtn.innerHTML = '<span class="material-symbols-outlined text-outline-variant group-hover:text-primary">alternate_email</span> Send_Message.sh';
                    formStatus.classList.add('hidden');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Execute_Send';
                }, 3000);
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    statusText.textContent = 'ERROR: ' + data.errors.map(error => error.message).join(', ');
                } else {
                    statusText.textContent = 'ERROR: TRANSMISSION_FAILED. RETRY_LATER.';
                }
                statusText.classList.add('text-red-500');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Execute_Send';
            }
        } catch (error) {
            statusText.textContent = 'ERROR: CONNECTION_TIMEOUT. CHECK_UPLINK.';
            statusText.classList.add('text-red-500');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Execute_Send';
        }
    });
});
