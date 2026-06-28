# Drawing Story Game - Ip & Anneke (Single Player)

[![Status](https://img.shields.io/badge/status-planning-lightgrey)](#)
[![Version](https://img.shields.io/badge/version-0.1.0-blue)](#)
[![License](https://img.shields.io/badge/license-placeholder-lightgrey)](#)
[![Hosted on GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blueviolet)](#)

**Development Status:** Planning and project setup.

## Goal

Build a small browser-based drawing game where you move a dot with a joystick, connect with nearby targets, and complete story scenes by drawing shapes on the canvas. The experience should stay lightweight, mobile-friendly, and easy to extend, while using simple vanilla JavaScript and a clean static-site workflow.

## Overview

This project is a lightweight, single-player canvas game built with vanilla JavaScript, HTML, and CSS. The player controls a dot using an on-screen joystick, moves toward local target objects, and creates a drawing trail whenever a connection becomes active.

The game is designed to feel playful and easy to extend. Short levels, simple visuals, and a story-driven structure keep the experience focused, while the browser animation loop uses `requestAnimationFrame` for smooth frame updates [web:45].

## Core Idea

Each level presents a small scene and a target object to draw. The player moves around the canvas, gets close enough to a target, and begins drawing through the connection midpoint. Once enough of the target shape is completed, the game unlocks the next scene and continues the story.

The gameplay loop is simple:

1. Move the player dot with the joystick.
2. Approach a target object.
3. Activate the gray connection line.
4. Draw the shape through the connection midpoint.
5. Complete the level and move to the next scene.

## Features

- Mobile-friendly joystick controls.
- Player dot with a white hole in the center.
- Local target objects that create proximity-based interactions.
- Gray connection line when the player is close enough to a target.
- Random color assigned to each active connection.
- Midpoint drawing trail that follows the connection.
- Story-based level progression.
- Static-site friendly design for GitHub Pages [web:107][web:93].

## Story Direction

The game uses a childlike, scene-based tone inspired by everyday adventures. Each level is built around a small visual moment, such as a yard, a kite in the sky, a garden gate, a pond, an evening lantern scene, or a final rocket launch.

The story text stays short and gentle so the player can focus on the drawing challenge.

## Controls

- **Touch / Drag**: Move the joystick to control the player dot.
- **Release**: Stop movement and return the joystick to center.
- **Goal**: Reach the target object and complete the current drawing scene.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Canvas API
- GitHub Pages for hosting [web:107][web:93]
- GitHub repository workflow

## Current Scope

This repository focuses on:

- one-player movement,
- proximity-triggered drawing,
- level-based object tracing,
- story-driven progression,
- and a simple static deployment workflow.

## Roadmap

- Add more levels and target shapes.
- Improve transitions between scenes.
- Expand story visuals and background assets.
- Add sound effects.
- Add optional difficulty modes.

## License

Placeholder for your chosen license.

## Notes

This project is intended to be lightweight, readable, and easy to extend. The code is organized so gameplay logic, story data, and visual assets can evolve separately without forcing a framework-heavy setup [web:45][web:51].
