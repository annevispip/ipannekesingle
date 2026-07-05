export class Player {
  constructor(x, y, radius = 10, color = 'black') {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.vx = 0;
    this.vy = 0;
    this.speed = 4;
  }

  update(width, height) {
    // Apply velocity
    this.x += this.vx;
    this.y += this.vy;

    // Clamp within bounds
    this.x = Math.max(this.radius, Math.min(width - this.radius, this.x));
    this.y = Math.max(this.radius, Math.min(height - this.radius, this.y));

    // Apply friction - simple damping for smoother stop
    this.vx *= 0.92;
    this.vy *= 0.92;
  }

  render(ctx) {
    // Outer circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Inner circle (white hole)
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
  }
}
