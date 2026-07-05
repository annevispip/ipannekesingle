export class Joystick {
  constructor(baseEl, knobEl, onMove) {
    this.baseEl = baseEl;
    this.knobEl = knobEl;
    this.onMove = onMove;
    this.active = false;
    this.pointerId = null;
    this.maxRadius = 50;

    this.bindEvents();
  }

  bindEvents() {
    this.baseEl.addEventListener('pointerdown', (e) => {
      this.active = true;
      this.pointerId = e.pointerId;
      this.baseEl.setPointerCapture(e.pointerId);
      this.updateFromEvent(e);
    });

    this.baseEl.addEventListener('pointermove', (e) => {
      if (!this.active || e.pointerId !== this.pointerId) return;
      this.updateFromEvent(e);
    });

    const end = (e) => {
      if (e.pointerId !== this.pointerId) return;
      this.active = false;
      this.pointerId = null;
      this.knobEl.style.transform = 'translate(-50%, -50%)';
      this.onMove({ x: 0, y: 0 });
    };

    this.baseEl.addEventListener('pointerup', end);
    this.baseEl.addEventListener('pointercancel', end);
  }

  updateFromEvent(e) {
    const rect = this.baseEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    let dx = e.clientX - cx;
    let dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > this.maxRadius) {
      dx = (dx / dist) * this.maxRadius;
      dy = (dy / dist) * this.maxRadius;
    }

    this.knobEl.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;

    // Normalized input from -1 to 1
    this.onMove({
      x: dx / this.maxRadius,
      y: dy / this.maxRadius
    });
  }
}
