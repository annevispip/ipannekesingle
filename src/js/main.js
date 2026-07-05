import { Player } from './Player.js';
import { Joystick } from './Joystick.js';
import { CONFIG } from './config.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let player;
let joystick;

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
    player = new Player(width / 2, height / 2, CONFIG.playerRadius || 15);
  } else {
    // Keep player inside the new bounds
    player.x = Math.min(Math.max(player.x, player.radius), width - player.radius);
    player.y = Math.min(Math.max(player.y, player.radius), height - player.radius);
  }
}

function setupJoystick() {
  const baseEl = document.getElementById('joystickBase');
  const knobEl = document.getElementById('joystickKnob');

  if (!baseEl || !knobEl) {
    console.warn('Joystick elements not found');
    return;
  }

  joystick = new Joystick(baseEl, knobEl, (input) => {
    // input.x and input.y are normalized in [-1, 1]
    if (!player) return;
    player.vx = input.x * player.speed;
    player.vy = input.y * player.speed;
  });
}

function loop() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  ctx.clearRect(0, 0, width, height);

  if (player) {
    player.update(width, height);
    player.render(ctx);
  }

  requestAnimationFrame(loop);
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
setupJoystick();
requestAnimationFrame(loop);
