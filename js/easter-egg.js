class DinoGame {
    constructor() {
        this.isGameActive = false;
        this.gameContainer = null;
        this.gameCanvas = null;
        this.ctx = null;
        this.score = 0;
        this.gameSpeed = 6;
        this.obstacles = [];
        this.isJumping = false;
        this.velocityY = 0;
        this.gravity = 0.6;
        this.groundLevel = 0;
        this.gameRunning = false;
        this.obstacleSpawnRate = 120;
        this.spawnCounter = 0;
        this.dinoY = 0;
        this.frameCount = 0;
        this.dinoAnimFrame = 0;
        this.cloudX = [];
        this.maxScore = 0;
        this.gameOver = false;
        this.retryButton = null;
    }

    init() {
        if (this.isGameActive) return;
        
        this.isGameActive = true;
        this.createGameContainer();
        this.setupCanvas();
        this.setupEventListeners();
        this.generateClouds();
        this.gameRunning = true;
        this.gameLoop();
    }

    createGameContainer() {
        this.gameContainer = document.createElement('div');
        this.gameContainer.className = 'easter-egg-game-container';
        this.gameContainer.innerHTML = `
            <div class="game-header">
                <span class="game-high-score">HI <span id="hi-score">0</span></span>
                <span class="game-score">
                    <span class="score-label">SCORE</span>
                    <span class="score-value">0</span>
                </span>
                <button class="game-retry-btn" type="button" hidden>Reintentar</button>
                <button class="game-close-btn">&times;</button>
            </div>
            <canvas id="game-canvas"></canvas>
        `;
        
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.parentNode.insertBefore(this.gameContainer, heroSection.nextSibling);
        }

        this.gameContainer.querySelector('.game-close-btn').addEventListener('click', () => {
            this.closeGame();
        });

        this.retryButton = this.gameContainer.querySelector('.game-retry-btn');
        if (this.retryButton) {
            this.retryButton.addEventListener('click', () => {
                this.restartGame();
            });
        }
    }

    setupCanvas() {
        this.gameCanvas = document.getElementById('game-canvas');
        this.gameCanvas.width = 1200;
        this.gameCanvas.height = 300;
        this.ctx = this.gameCanvas.getContext('2d');
        this.groundLevel = this.gameCanvas.height - 50;
        this.dinoY = this.groundLevel;
    }

    setupEventListeners() {
        const keyHandler = (e) => {
            if ((e.code === 'Space' || e.code === 'ArrowUp') && this.gameRunning) {
                e.preventDefault();
                this.jump();
            }
            if (e.code === 'ArrowDown' && this.gameRunning && this.isJumping) {
                this.duck();
            }
        };

        document.addEventListener('keydown', keyHandler);
        this.gameCanvas.addEventListener('click', () => {
            if (this.gameRunning) {
                this.jump();
            }
        });
    }

    jump() {
        if (!this.isJumping && this.gameRunning) {
            this.isJumping = true;
            this.velocityY = -15;
        }
    }

    duck() {
        // Aquí se podría implementar agacharse
    }

    generateClouds() {
        this.cloudX = [];
        for (let i = 0; i < 5; i++) {
            this.cloudX.push(Math.random() * this.gameCanvas.width);
        }
    }

    drawClouds() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        
        for (let i = 0; i < this.cloudX.length; i++) {
            const x = this.cloudX[i];
            const y = 50;
            
            this.ctx.beginPath();
            this.ctx.arc(x, y, 12, 0, Math.PI * 2);
            this.ctx.arc(x + 20, y - 5, 15, 0, Math.PI * 2);
            this.ctx.arc(x + 40, y, 12, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.cloudX[i] -= 0.5;
            if (this.cloudX[i] < -50) {
                this.cloudX[i] = this.gameCanvas.width + 50;
            }
        }
    }

    drawGround() {
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.groundLevel);
        
        const lineLength = 20;
        const gap = 10;
        for (let x = 0; x < this.gameCanvas.width; x += lineLength + gap) {
            this.ctx.moveTo(x, this.groundLevel);
            this.ctx.lineTo(x + lineLength, this.groundLevel);
        }
        this.ctx.stroke();
    }

    drawDino() {
        const x = 50;
        const y = this.dinoY;

        // Cuerpo
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(x, y, 40, 50);

        // Cabeza
        this.ctx.fillRect(x + 30, y - 15, 20, 20);

        // Ojos
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(x + 37, y - 10, 4, 4);
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(x + 37, y - 10, 2, 2);

        // Patas animadas
        const legOffset = Math.sin(this.frameCount * 0.1) * 3;
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(x + 10, y + 48, 5, 12 + legOffset);
        this.ctx.fillRect(x + 25, y + 48, 5, 12 - legOffset);

        // Cola
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + 20);
        this.ctx.lineTo(x - 10, y + 15);
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    }

    drawObstacle(obstacle) {
        this.ctx.fillStyle = '#333';
        
        if (obstacle.type === 'cactus-small') {
            // Cactus pequeño
            this.ctx.fillRect(obstacle.x, obstacle.y, 15, 30);
            this.ctx.fillRect(obstacle.x - 8, obstacle.y + 8, 8, 8);
            this.ctx.fillRect(obstacle.x + 15, obstacle.y + 8, 8, 8);
        } else if (obstacle.type === 'cactus-large') {
            // Cactus grande
            this.ctx.fillRect(obstacle.x, obstacle.y - 20, 20, 50);
            this.ctx.fillRect(obstacle.x - 10, obstacle.y + 5, 10, 10);
            this.ctx.fillRect(obstacle.x + 20, obstacle.y + 5, 10, 10);
        } else if (obstacle.type === 'bird') {
            // Pterodáctilo
            const wingFlap = Math.sin(this.frameCount * 0.3) * 5;
            // Cuerpo
            this.ctx.fillRect(obstacle.x, obstacle.y, 20, 12);
            // Alas
            this.ctx.beginPath();
            this.ctx.moveTo(obstacle.x + 5, obstacle.y + 6);
            this.ctx.bezierCurveTo(
                obstacle.x + 5 - wingFlap, obstacle.y - 5,
                obstacle.x + 15 + wingFlap, obstacle.y - 5,
                obstacle.x + 15, obstacle.y + 6
            );
            this.ctx.stroke();
        }
    }

    checkCollision(x1, y1, w1, h1, obstacle) {
        return x1 < obstacle.x + obstacle.width &&
               x1 + w1 > obstacle.x &&
               y1 < obstacle.y + obstacle.height &&
               y1 + h1 > obstacle.y;
    }

    gameLoop = () => {
        if (!this.gameRunning) return;

        // Fondo
        this.ctx.fillStyle = '#f7f7f7';
        this.ctx.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

        // Nubes
        this.drawClouds();

        // Suelo
        this.drawGround();

        // Actualizar física del dino
        if (this.isJumping) {
            this.velocityY += this.gravity;
            this.dinoY += this.velocityY;

            if (this.dinoY >= this.groundLevel) {
                this.dinoY = this.groundLevel;
                this.isJumping = false;
                this.velocityY = 0;
            }
        }

        // Dibujar dino
        this.drawDino();

        // Spawn de obstáculos
        this.spawnCounter++;
        if (this.spawnCounter > this.obstacleSpawnRate) {
            const types = ['cactus-small', 'cactus-large', 'bird'];
            const randomType = types[Math.floor(Math.random() * types.length)];
            
            let height = 30;
            if (randomType === 'cactus-large') height = 50;
            if (randomType === 'bird') height = 12;

            this.obstacles.push({
                x: this.gameCanvas.width,
                y: randomType === 'bird' ? this.groundLevel - 40 : this.groundLevel,
                width: randomType === 'bird' ? 20 : 15,
                height: height,
                type: randomType
            });
            this.spawnCounter = 0;
        }

        // Actualizar y dibujar obstáculos
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            this.obstacles[i].x -= this.gameSpeed;

            this.drawObstacle(this.obstacles[i]);

            // Colisión
            if (this.checkCollision(50, this.dinoY - 15, 40, 65, this.obstacles[i])) {
                this.endGame();
                return;
            }

            // Eliminar obstáculos fuera de pantalla
            if (this.obstacles[i].x < -50) {
                this.obstacles.splice(i, 1);
                this.score += 10;
                
                // Aumentar dificultad
                if (this.score % 100 === 0) {
                    this.gameSpeed += 0.5;
                    this.obstacleSpawnRate = Math.max(60, this.obstacleSpawnRate - 3);
                }
            }
        }

        // Actualizar UI
        document.querySelector('.score-value').textContent = this.score;
        if (this.score > this.maxScore) {
            this.maxScore = this.score;
            document.getElementById('hi-score').textContent = this.maxScore;
        }

        this.frameCount++;
        requestAnimationFrame(this.gameLoop);
    }

    endGame() {
        this.gameRunning = false;
        this.gameOver = true;
        if (this.retryButton) {
            this.retryButton.hidden = false;
        }
        
        // Overlay semi-transparente
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        
        // Texto GAME OVER
        this.ctx.fillStyle = '#333';
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('GAME OVER', this.gameCanvas.width / 2, this.gameCanvas.height / 2 - 30);
        
        this.ctx.font = '20px Arial';
        this.ctx.fillText(`Puntuación: ${this.score}`, this.gameCanvas.width / 2, this.gameCanvas.height / 2 + 20);
    }

    restartGame() {
        this.score = 0;
        this.gameSpeed = 6;
        this.obstacles = [];
        this.isJumping = false;
        this.velocityY = 0;
        this.obstacleSpawnRate = 120;
        this.spawnCounter = 0;
        this.dinoY = this.groundLevel;
        this.frameCount = 0;
        this.gameOver = false;
        this.generateClouds();
        if (this.retryButton) {
            this.retryButton.hidden = true;
        }
        const scoreValue = this.gameContainer && this.gameContainer.querySelector('.score-value');
        if (scoreValue) {
            scoreValue.textContent = '0';
        }
        this.gameRunning = true;
        this.gameLoop();
    }

    closeGame() {
        this.gameRunning = false;
        this.isGameActive = false;
        if (this.gameContainer) {
            this.gameContainer.remove();
        }
    }
}

// Inicializar easter egg al cargar
document.addEventListener('DOMContentLoaded', () => {
    const motto = document.querySelector('.hero-motto');
    if (motto) {
        const words = motto.textContent.split(' ');
        const newHTML = words.map(word => 
            `<span class="easter-egg-word" data-word="${word}">${word}</span>`
        ).join(' ');
        
        motto.innerHTML = newHTML;

        // Crear instancia única del juego
        let game = null;

        document.querySelectorAll('.easter-egg-word').forEach(word => {
            word.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Si hay un juego activo, cerrarlo primero
                if (game && game.isGameActive) {
                    game.closeGame();
                }
                
                // Crear y iniciar nuevo juego
                game = new DinoGame();
                game.init();
            });
        });
    }
});
