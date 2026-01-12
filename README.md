# Predator and Prey
This project simulates a dynamic chain of autonomous agents that chase and flee from one another to form a colorful, snake-like organism. Each agent behaves independently using pursuit and evasion logic, but together they generate complex movement patterns that evolve into flowing trails across the screen.

# View Project on the Web
## Instructions
- Click anywhere on the screen to spawn a new agent
- Click on the screen to activate key controls
- Press **SPACE** to toggle:
  - *Autonomous mode* — the snake roams freely with emergent motion
  - *Mouse-targeting mode* — the chain actively pursues your cursor

## Links
- View project: https://editor.p5js.org/GeffenGilbert/full/nGML2wlqY

# Features
## Agent Interaction
- Each agent:
  - Flees from the agent directly behind it using position-based avoidance
  - Pursues the agent ahead using predictive steering based on that agent’s velocity
- Combined behaviors create motion that feels organized, fluid, and lifelike

## Snake Formation
- Agents are drawn as colorful triangles
- Their positions form a continuous chain that bends and stretches like a moving serpent
- They are colored to create a gradient which fades into the black background

## From-Scratch Steering Behaviors
- Custom pursuit and evasion logic implemented without external libraries
- Predictive targeting computes future positions based on velocity
- Fully vector-based movement and steering built directly in p5.js

## Interactive Exploration
- Add agents dynamically with mouse clicks
- Redirect the entire system by toggling pursuit of the mouse
- Watch emergent patterns form from simple rules

# Code Structure
- Arrays store and update agent state
- Vector math drives motion and steering
- Clean update and draw functions using an organized vehicle class

# Purpose
This project explores how complex, lifelike motion emerges from simple autonomous interactions. It blends creative coding, vector mathematics, and interactivity into a system driven by algorithmic behavior.

# Technologies
- p5.js
- Custom pursuit and avoidance logic
