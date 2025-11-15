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

class ClockAndTimer {
    constructor() {
        this.clockElement = document.getElementById('clock');
        this.minutesInput = document.getElementById('minutes');
        this.startButton = document.getElementById('start-timer');
        this.stopButton = document.getElementById('stop-timer');
        this.resetButton = document.getElementById('reset-timer');
        this.countdownElement = document.getElementById('countdown');
        
        this.timerInterval = null;
        this.countdownTime = 0;
        this.isTimerRunning = false;
        
        this.init();
    }
    
    init() {
        this.updateClock();
        setInterval(() => this.updateClock(), 1000);
        
        this.startButton.addEventListener('click', () => this.startTimer());
        this.stopButton.addEventListener('click', () => this.stopTimer());
        this.resetButton.addEventListener('click', () => this.resetTimer());
        
        this.minutesInput.addEventListener('input', () => this.validateInput());
        
        this.minutesInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.startTimer();
            }
        });
        
        console.log('Часы и таймер инициализированы');
    }
    
    updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        this.clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    validateInput() {
        let value = parseInt(this.minutesInput.value);
        
        if (isNaN(value) || value < 1) {
            this.minutesInput.value = 1;
        } else if (value > 60) {
            this.minutesInput.value = 60;
        }
    }
    
    startTimer() {
        if (this.isTimerRunning) return;
        
        const minutes = parseInt(this.minutesInput.value);
        
        if (isNaN(minutes) || minutes < 1) {
            alert('Пожалуйста, введите корректное количество минут');
            return;
        }
        
        this.countdownTime = minutes * 60; 
        this.isTimerRunning = true;
        
        this.updateButtons();
        this.updateCountdownDisplay();
        
        this.timerInterval = setInterval(() => {
            this.countdownTime--;
            
            if (this.countdownTime <= 0) {
                this.timerComplete();
            } else {
                this.updateCountdownDisplay();
                
                if (this.countdownTime <= 10) {
                    this.countdownElement.classList.add('warning');
                }
            }
        }, 1000);
    }
    
    stopTimer() {
        if (!this.isTimerRunning) return;
        
        this.isTimerRunning = false;
        clearInterval(this.timerInterval);
        this.updateButtons();
        this.countdownElement.classList.remove('warning');
    }
    
    resetTimer() {
        this.stopTimer();
        this.countdownTime = 0;
        this.countdownElement.textContent = '--:--';
        this.countdownElement.classList.remove('warning');
        this.minutesInput.value = '5';
    }
    
    timerComplete() {
        this.stopTimer();
        
        this.playAlertSound();
        
        this.countdownElement.textContent = '00:00';
        this.countdownElement.classList.add('warning');
        
        alert('Время вышло! ⏰');
        
        setTimeout(() => {
            this.resetTimer();
        }, 3000);
    }
    
    playAlertSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    }
    
    updateCountdownDisplay() {
        const minutes = Math.floor(this.countdownTime / 60);
        const seconds = this.countdownTime % 60;
        
        this.countdownElement.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    updateButtons() {
        this.startButton.disabled = this.isTimerRunning;
        this.stopButton.disabled = !this.isTimerRunning;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ClockAndTimer();
});






