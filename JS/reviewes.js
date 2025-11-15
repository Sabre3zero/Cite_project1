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


console.log('Скрипт загружен!');

const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

console.log('Элементы:', {taskInput, addTaskButton, taskList});

if (!taskInput || !addTaskButton || !taskList) {
    console.error('Элементы не найдены!');
} else {
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Пожалуйста, введите задачу');
            return;
        }
        
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="complete-btn">✅</button>
            <button class="delete-btn">❌</button>
        `;
        
        li.querySelector('.delete-btn').onclick = () => li.remove();
        li.querySelector('.complete-btn').onclick = () => li.classList.toggle('completed');
        
        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
    
    console.log('Приложение запущено!');
}