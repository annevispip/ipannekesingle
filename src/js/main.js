import { Player } from './Player.js';
import { CONFIG } from './config.js';
import { Joystick } from './Joystick.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const joystick = new Joystick(
  document.getElementById('joystickBase'),
  document.getElementById('joystickKnob'),
  (input) => {
    player.vx = input.x * player.speed;
    player.vy = input.y * player.speed;
  }
);

let player;

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  if (!player) {
    player = new Player(width / 2, height / 2, CONFIG.playerRadius);
    return;
  }

  player.x = Math.min(player.x, width - player.radius);
  player.y = Math.min(player.y, height - player.radius);
}

function loop() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  player.update(window.innerWidth, window.innerHeight);
  player.render(ctx);

  requestAnimationFrame(loop);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
requestAnimationFrame(loop);
