// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    console.log('DOMContentLoaded fired.');
    console.log('menuToggle:', menuToggle);
    console.log('nav:', nav);

    if (menuToggle && nav) {
        console.log('menuToggle and nav found. Adding event listener.');
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu after clicking a link
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Form submission handling
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        const submitBtn = document.getElementById('submit-btn');

        if (contactForm && submitBtn) {
            console.log('Contact form and submit button found.');
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                console.log('Form submission started');

                submitBtn.disabled = true;
                submitBtn.textContent = '送信中...';

                const formData = new FormData(contactForm);

                try {
                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json'
                        },
                        body: formData
                    });

                    if (response.ok) {
                        formStatus.textContent = 'メッセージが送信されました。ありがとうございます！';
                        formStatus.className = 'form-status success';
                        contactForm.reset();
                    } else {
                        throw new Error('送信に失敗しました。');
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    formStatus.textContent = 'エラーが発生しました。時間を置いて再度お試しいただくか、SNSよりご連絡ください。';
                    formStatus.className = 'form-status error';
                } finally {
                    submitBtn.disabled = false;
                    submitBtn.textContent = '送信';
                }
            });
        }
    }
});