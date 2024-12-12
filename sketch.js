// Emoji list
let emojis = ['😀', '😎', '🥳', '🤩', '👻', '🌟', '❤️', '🎵', '🐱', '🐶'];

let walkers = [];
let maxWalkers = 10; // Number of walkers
let bgColor; // Random background color

function setup() {
  createCanvas(400, 400);

  // Generate a random background color
  RandomColor = color(random(100, 255), random(100, 255), random(100, 255));

  // Set the background color
  background(RandomColor);

  // Create walkers
  for (let i = 0; i < maxWalkers; i++) {
    walkers.push(new Walker(random(width), random(height), random(10, 20), random(emojis)));
  }

  // Display your name
  fill(255);
  textAlign(CENTER, TOP);
  textSize(18);
  text("Fuyu Wang", width / 2, 10);
}

function draw() {
  // Update walker states
  for (let walker of walkers) {
    walker.display(); // Display the emoji
    walker.move(); // Move the emoji
  }
}