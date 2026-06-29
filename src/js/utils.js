export function getDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function getMidPoint(a, b) {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  };
}

export function randomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 50%)`;
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
