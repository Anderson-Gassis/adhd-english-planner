class ConfettiEngine {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['#9d4edd', '#00f5d4', '#10b981', '#ef4444', '#f59e0b', '#3b82f6'];
        this.active = false;
        
        window.addEventListener('resize', () => this.resizeCanvas());
        this.resizeCanvas();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * -this.canvas.height - 20,
            size: Math.random() * 8 + 6,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 4 + 4,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5
        };
    }

    start() {
        this.particles = [];
        for (let i = 0; i < 120; i++) {
            this.particles.push(this.createParticle());
        }
        
        if (!this.active) {
            this.active = true;
            this.animate();
        }
    }

    animate() {
        if (!this.active) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        let alive = false;
        
        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            
            if (p.y < this.canvas.height) {
                alive = true;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate((p.rotation * Math.PI) / 180);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
        });

        if (alive) {
            requestAnimationFrame(() => this.animate());
        } else {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.active = false;
        }
    }
}

// Export single global instance
window.confetti = new ConfettiEngine();
