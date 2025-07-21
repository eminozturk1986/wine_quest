// Wine Quest - Main Game Logic
class WineQuest {
    constructor() {
        this.currentLevel = 1;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalScore = 0;
        this.gameState = 'start'; // 'start', 'playing', 'level-complete', 'game-complete'
        this.startTime = null;
        
        this.init();
    }

    init() {
        console.log('Wine Quest initializing...');
        this.bindEvents();
        this.showScreen('start-screen');
        this.updateDisplay();
    }

    bindEvents() {
        // Start button
        document.getElementById('start-btn').addEventListener('click', () => {
            this.startGame();
        });

        // Answer buttons
        document.querySelectorAll('.btn-answer').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.handleAnswer(e.target.dataset.answer, e.target);
            });
        });

        // Navigation buttons
        document.getElementById('next-btn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('next-level-btn').addEventListener('click', () => {
            this.nextLevel();
        });

        document.getElementById('replay-level-btn').addEventListener('click', () => {
            this.replayLevel();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            this.restartGame();
        });

        document.getElementById('share-btn').addEventListener('click', () => {
            this.shareScore();
        });
    }

    startGame() {
        this.gameState = 'playing';
        this.currentLevel = 1;
        this.currentQuestion = 0;
        this.score = 0;
        this.totalScore = 0;
        this.startTime = Date.now();
        
        this.showScreen('game-screen');
        this.loadLevel();
    }

    loadLevel() {
        const level = LEVELS[this.currentLevel];
        if (!level) {
            this.completeGame();
            return;
        }

        console.log(`Loading Level ${this.currentLevel}: ${level.name}`);
        this.currentQuestion = 0;
        this.score = 0;
        this.updateDisplay();
        this.loadQuestion();
    }

    loadQuestion() {
        const level = LEVELS[this.currentLevel];
        const question = level.questions[this.currentQuestion];
        
        if (!question) {
            this.completeLevel();
            return;
        }

        console.log(`Loading question ${this.currentQuestion + 1}/${level.questions.length}`);
        
        // Update wine display
        this.displayWine(question.wine, question.age);
        
        // Update question with educational context
        document.getElementById('question-text').textContent = question.question;
        
        // Update answer buttons
        const answerButtons = document.querySelectorAll('.btn-answer');
        question.answers.forEach((answer, index) => {
            if (answerButtons[index]) {
                answerButtons[index].textContent = answer;
                answerButtons[index].dataset.index = index;
                answerButtons[index].classList.remove('correct', 'incorrect', 'disabled');
                answerButtons[index].disabled = false;
            }
        });

        // Hide feedback
        document.getElementById('feedback').classList.add('hidden');
        
        this.updateDisplay();
    }

    displayWine(wineKey, age) {
        const wine = WINES[wineKey];
        const wineData = wine[age];
        
        if (!wine || !wineData) {
            console.error('Wine data not found:', wineKey, age);
            return;
        }

        // Update wine glass color
        this.updateWineGlassColor(wineData.color);
        
        // Update wine information
        document.getElementById('wine-name').textContent = wine.name;
        document.getElementById('wine-description').textContent = wineData.description;
        document.getElementById('educational-tip').textContent = wineData.educationalTip;
        
        // Update characteristics
        const characteristicsContainer = document.getElementById('wine-characteristics');
        characteristicsContainer.innerHTML = '';
        wineData.characteristics.forEach(char => {
            const span = document.createElement('span');
            span.className = 'characteristic';
            span.textContent = char;
            characteristicsContainer.appendChild(span);
        });
    }

    updateWineGlassColor(colorData) {
        const wineGradient = document.getElementById('wineGradient');
        const wineFill = document.getElementById('wine-fill');
        
        if (wineGradient && colorData.gradient) {
            // Update gradient stops
            const stops = wineGradient.querySelectorAll('stop');
            colorData.gradient.forEach((color, index) => {
                if (stops[index]) {
                    stops[index].setAttribute('style', `stop-color:${color};stop-opacity:${colorData.opacity}`);
                }
            });
        }

        if (wineFill) {
            wineFill.setAttribute('opacity', colorData.opacity);
        }

        // Add subtle animation when changing wine
        const wineGlass = document.getElementById('wine-glass');
        wineGlass.style.transform = 'scale(0.95)';
        setTimeout(() => {
            wineGlass.style.transform = 'scale(1)';
        }, 200);
    }

    handleAnswer(answerIndex, buttonElement) {
        const level = LEVELS[this.currentLevel];
        const question = level.questions[this.currentQuestion];
        const correctIndex = question.correct;
        const isCorrect = parseInt(answerIndex) === correctIndex;

        // Disable all buttons
        document.querySelectorAll('.btn-answer').forEach(btn => {
            btn.disabled = true;
            btn.classList.add('disabled');
        });

        // Show correct/incorrect styling
        buttonElement.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        if (!isCorrect) {
            // Highlight correct answer
            const correctButton = document.querySelector(`[data-index="${correctIndex}"]`);
            if (correctButton) {
                correctButton.classList.add('correct');
            }
        }

        // Update score
        if (isCorrect) {
            this.score++;
            this.totalScore++;
        }

        // Show feedback
        this.showFeedback(isCorrect, question.explanation);
        
        console.log(`Answer: ${isCorrect ? 'Correct' : 'Incorrect'}. Score: ${this.score}/${this.currentQuestion + 1}`);
    }

    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        const feedbackText = document.getElementById('feedback-text');
        
        const icon = isCorrect ? '✅' : '❌';
        const message = isCorrect ? 'Correct!' : 'Incorrect';
        
        feedbackText.innerHTML = `
            <strong>${icon} ${message}</strong>
            <p>${explanation}</p>
        `;
        
        feedback.classList.remove('hidden');
        feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    }

    nextQuestion() {
        this.currentQuestion++;
        
        if (this.currentQuestion >= LEVELS[this.currentLevel].questions.length) {
            this.completeLevel();
        } else {
            this.loadQuestion();
        }
    }

    completeLevel() {
        const level = LEVELS[this.currentLevel];
        const totalQuestions = level.questions.length;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        
        console.log(`Level ${this.currentLevel} complete: ${this.score}/${totalQuestions} (${percentage}%)`);
        
        // Update level complete screen
        document.getElementById('level-score').textContent = `${this.score}/${totalQuestions}`;
        document.getElementById('level-time').textContent = this.formatTime(Date.now() - this.startTime);
        
        let feedback = '';
        if (percentage >= 90) {
            feedback = 'Outstanding! You have mastered this level.';
        } else if (percentage >= 70) {
            feedback = 'Well done! Good understanding of wine characteristics.';
        } else if (percentage >= 50) {
            feedback = 'Good effort! Consider reviewing the educational tips.';
        } else {
            feedback = 'Keep practicing! Wine recognition takes time to develop.';
        }
        
        document.getElementById('level-feedback').textContent = feedback;
        
        // Show/hide next level button
        const nextLevelBtn = document.getElementById('next-level-btn');
        if (this.currentLevel < Object.keys(LEVELS).length) {
            nextLevelBtn.style.display = 'block';
        } else {
            nextLevelBtn.style.display = 'none';
            setTimeout(() => this.completeGame(), 2000);
        }
        
        this.showScreen('level-complete-screen');
    }

    nextLevel() {
        this.currentLevel++;
        this.loadLevel();
        this.showScreen('game-screen');
    }

    replayLevel() {
        this.score = 0;
        this.currentQuestion = 0;
        this.loadLevel();
        this.showScreen('game-screen');
    }

    completeGame() {
        const totalQuestions = Object.values(LEVELS).reduce((sum, level) => sum + level.questions.length, 0);
        const accuracy = Math.round((this.totalScore / totalQuestions) * 100);
        
        document.getElementById('total-score').textContent = `${this.totalScore}/${totalQuestions}`;
        document.getElementById('accuracy').textContent = `${accuracy}%`;
        
        console.log(`Game complete! Total score: ${this.totalScore}/${totalQuestions} (${accuracy}%)`);
        
        this.showScreen('game-complete-screen');
    }

    restartGame() {
        this.startGame();
    }

    shareScore() {
        const totalQuestions = Object.values(LEVELS).reduce((sum, level) => sum + level.questions.length, 0);
        const accuracy = Math.round((this.totalScore / totalQuestions) * 100);
        
        const shareText = `I just completed Wine Quest with ${accuracy}% accuracy! Test your wine knowledge: ${window.location.href}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Wine Quest - Wine Recognition Game',
                text: shareText,
                url: window.location.href
            });
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareText).then(() => {
                alert('Score copied to clipboard!');
            }).catch(() => {
                alert(`Share your score: ${shareText}`);
            });
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        document.getElementById(screenId).classList.add('active');
    }

    updateDisplay() {
        // Update level info
        document.getElementById('current-level').textContent = `Level ${this.currentLevel}`;
        
        // Update progress bar
        const level = LEVELS[this.currentLevel];
        if (level) {
            const progress = ((this.currentQuestion + 1) / level.questions.length) * 100;
            document.getElementById('progress-fill').style.width = `${progress}%`;
        }
        
        // Update score
        document.getElementById('score').textContent = `Score: ${this.totalScore}`;
    }

    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.wineQuest = new WineQuest();
});