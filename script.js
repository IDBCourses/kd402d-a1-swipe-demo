/*
 * IDB Programming: A1 Modelling — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — applies the state to make sound every 100ms, if necessary
 *   controls — what happens when a key goes down or comes up
 *   setup    — starts everything
 *
 * There is no loop in this assignment. Nothing happens until the player presses
 * a key, and every key event follows the same two steps:
 *   1. update: change the state, based on which key it was
 *   2. use:    make sound from the state
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which key does what, which notes you can play, the tempo.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: which octave you're playing in, or whether a drone is on.
let prevKey = null;
let swipeArray = [];

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  // Example: replace this with your own instrument.

  setTimeout(update, 100); // call update() again in 100 milliseconds
}

// ---------- Use ----------
// Use the state to make sound. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time a key goes down.
function keyDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something

  // Holding a key down sends keydown again and again. Only react to the first one.
  if (event.repeat === false) {
    // Check to see whether the current key pressed is beside the previous one.
    if (prevKey !== null) {
      let currentIndex = row.indexOf(event.key);
      let prevIndex = row.indexOf(prevKey);

      let direction = currentIndex - prevIndex;

      if (swipeArray[swipeArray.length - 1] === direction) {
        swipeArray.push(direction);
      } else {
        swipeArray = [direction];
      }

      if (direction === -1) {
        console.log("Swiped Left for " + swipeArray.length + " keys.");
      } else if (direction === 1) {
        console.log("Swiped Right for " + swipeArray.length + " keys.");
      } else {
        console.log("No Swipe");
      }
    }

    prevKey = event.key;
    console.log("Key down:", event.key);
  }
}

// Runs every time a key comes up.
function keyUp(event) {}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Put your event listener code here
  window.addEventListener("keydown", keyDown);
  window.addEventListener("keyup", keyUp);
}

setup(); // Always remember to call setup()!
