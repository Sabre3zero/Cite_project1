document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const messageElement = document.getElementById('message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (!name || !email) {
            showMessage('Пожалуйста, заполните все поля', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('Пожалуйста, введите корректный email', 'error');
            return;
        }
        
        showMessage('Отправка данных...', 'loading');
        
        setTimeout(() => {
            showMessage('Спасибо! Ваше сообщение отправлено.', 'success');
            form.reset();
        }, 2000);
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(text, type) {
        messageElement.textContent = text;
        messageElement.className = 'message';
        
        if (type === 'error') {
            messageElement.classList.add('message-error');
        } else if (type === 'success') {
            messageElement.classList.add('message-success');
        } else if (type === 'loading') {
            messageElement.classList.add('message-loading');
        }
    }
});


