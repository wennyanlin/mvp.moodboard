function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { randomIntFromInterval };

/*
Here's how it works:

- Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
- (max - min + 1) calculates the total number of possible values in the range between min and max, inclusive.
- Math.floor() rounds down the result of the multiplication to the nearest integer, which will be between 0 and the total number of possible values in the range.
- Finally, + min adds the min value to the result, so that the random integer falls within the desired range.

In summary, the expression Math.floor(Math.random() * (max - min + 1) + min) generates a random integer between min and max (inclusive), with each integer in the range having an equal probability of being selected.
  */
