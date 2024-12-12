class Walker {
    constructor(x, y, distance, emoji) {
      this.x1 = x; // Starting x position
      this.y1 = y; // Starting y position
      this.distance = distance; // Distance moved per step
      this.emoji = emoji; // Emoji symbol
      this.lastMoveTime = 0; // Last movement timestamp
      this.moveDelay = 400; // Delay between movements in milliseconds
      this.size = random(18, 36); // Random initial size of the emoji
    }
  
    display() {
      textSize(this.size); // Set emoji size
      text(this.emoji, this.x1, this.y1); // Draw emoji at current position
    }
  
    move() {
      if (millis() - this.lastMoveTime > this.moveDelay) {
        // Randomly update position
        this.x1 += random([-1, 1]) * this.distance;
        this.y1 += random([-1, 1]) * this.distance;
  
        // Keep the new position within canvas bounds
        this.keepInCanvas();
  
        // Update the last movement timestamp
        this.lastMoveTime = millis();
      }
    }
  
    keepInCanvas() {
      // Ensure the emoji stays within canvas boundaries
      if (this.x1 < 0) this.x1 = 0;
      if (this.x1 > width) this.x1 = width;
      if (this.y1 < 0) this.y1 = 0;
      if (this.y1 > height) this.y1 = height;
    }
  }