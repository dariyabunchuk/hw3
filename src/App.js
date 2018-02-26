// React Poker

// GOAL
// When the application is launched, show five face down cards, and a button that
// reads "Deal a new hand". Each time the "deal a new hand" button is clicked, show
// five random, unique playing cards.

// HINTS
// - The initial state of the state object is already set for you.
// - You can create an array of JSX elements and add them to the return of the render() function in
// - one line. The framework for doing this is already there.
// - Add an element to an array by using the .push() function
// - Grab the few n elements of an array by using the .splice() function, e.g. myArray.splice(0, n)
// - The card images follow this convention: http://golearntocode.com/images/cards/8_of_diamonds.png
// - Calling shuffledDeck() will give you an array of 52 strings, representing the rank and suit of
//   each card, in random order
// - Start by getting the five face down cards to show, then use the React developer tools in Chrome
//   to manipulate state manually, then write an event handler function and corresponding button.
import React, { Component } from 'react';
import shuffledDeck from './ShuffledDeck';
import './App.css';

// Current state deals cards facedown
class App extends Component {
  constructor() {
    super();
    this.state = {
      hand: ["face_down", "face_down", "face_down", "face_down", "face_down"]
    }
  }

// Future state deal cards given shuffled deck function - 5 cards at a time
  dealCards(){
  this.setState({
      hand: shuffledDeck().splice(0,5)
  })
  }

// Loop to show visible cards after clicking "Deal a new hand"
  render() {
// array to hold JSX elements
    let cards = [];
    for (let i = 0; i < this.state.hand.length ; i++) {
      cards.push(
          <img src={"http://golearntocode.com/images/cards/" + this.state.hand[i] + ".png"}/>
      )
    }
    return (
      <div className="App">
        {cards}
        <p><button><a href="#" onClick={() => this.dealCards()}>Deal a new hand</a></button></p>
      </div>
    );
  }
}

export default App;
