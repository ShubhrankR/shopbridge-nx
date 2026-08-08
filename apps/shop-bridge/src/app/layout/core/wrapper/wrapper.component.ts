import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    maxAlpha: number;
    color: string;
}

@Component({
    standalone: false,
    selector: 'thinkbridge-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit, OnDestroy {
    @ViewChild('bgCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

    mouseX = 0;
    mouseY = 0;
    targetMouseX = 0;
    targetMouseY = 0;

    private ctx: CanvasRenderingContext2D | null = null;
    private animationFrameId!: number;
    private particles: Particle[] = [];
    private readonly particleColors = ['#818cf8', '#a855f7', '#ec4899', '#38bdf8', '#34d399'];

    ngOnInit(): void {
        this.initCanvas();
        if (this.ctx) {
            this.createParticles();
            this.animate();
        }
    }

    ngOnDestroy(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    }

    @HostListener('window:resize')
    onResize(): void {
        this.resizeCanvas();
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent): void {
        this.targetMouseX = event.clientX;
        this.targetMouseY = event.clientY;
    }

    private initCanvas(): void {
        // Skip canvas context in headless unit test environment (jsdom)
        if (typeof navigator !== 'undefined' && navigator.userAgent?.includes('jsdom')) {
            return;
        }

        const canvas = this.canvasRef?.nativeElement;
        if (!canvas) return;

        try {
            const context = canvas.getContext('2d');
            if (context && typeof context.clearRect === 'function') {
                this.ctx = context;
            }
        } catch {
            this.ctx = null;
        }

        if (this.ctx) {
            this.resizeCanvas();
            this.targetMouseX = window.innerWidth / 2;
            this.targetMouseY = window.innerHeight / 2;
            this.mouseX = this.targetMouseX;
            this.mouseY = this.targetMouseY;
        }
    }

    private resizeCanvas(): void {
        const canvas = this.canvasRef?.nativeElement;
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    private createParticles(): void {
        this.particles = [];
        const count = Math.floor(Math.min(window.innerWidth, window.innerHeight) / 18);
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 2.5 + 1.2,
                alpha: Math.random() * 0.4 + 0.1,
                maxAlpha: Math.random() * 0.5 + 0.2,
                color: this.particleColors[Math.floor(Math.random() * this.particleColors.length)],
            });
        }
    }

    private animate = (): void => {
        if (!this.ctx) return;
        const canvas = this.canvasRef.nativeElement;

        // Smooth cursor lerp
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.08;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.08;

        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Interactive Mouse Spotlight Glow
        const gradient = this.ctx.createRadialGradient(
            this.mouseX,
            this.mouseY,
            10,
            this.mouseX,
            this.mouseY,
            380
        );
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.14)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw floating particles reacting to mouse position
        for (const p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;

            // Distance to mouse pointer
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Connect nearby particles to mouse cursor with subtle reactive line
            if (dist < 150) {
                const lineAlpha = (1 - dist / 150) * 0.25;
                this.ctx.beginPath();
                this.ctx.moveTo(p.x, p.y);
                this.ctx.lineTo(this.mouseX, this.mouseY);
                this.ctx.strokeStyle = `rgba(129, 140, 248, ${lineAlpha})`;
                this.ctx.lineWidth = 0.8;
                this.ctx.stroke();

                // Gentle repel force
                p.x -= (dx / dist) * 0.5;
                p.y -= (dy / dist) * 0.5;
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.alpha;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    };
}
