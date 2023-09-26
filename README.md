# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @amandadr/lotide`

**Require it:**

`const _ = require('@amandadr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: tests that two arrays are identical and returns a message to the user.
* `assertEqual`: tests that two primitives are identical and returns a message to the user.
* `assertObjectsEqual`: tests that two objects are identical and returns a message to the user.
* `countLetters`: counts how many of each letter are in a string and returns an object containing the counts.
* `countProps`: counts how many of property values are in an object and returns the count.
* `eqArrays`: tests that two arrays are identical and returns true or false.
* `eqObjects`: tests that two objects are identical and returns true or false.
* `findKeyByValue`: find an objects key name given its value.
* `head`: returns the first value of an array.
* `isOdd`: returns true if a number is odd.
* `letterPositions`: scans for a letter in a string and returns an object conataining corresponding indeces where the letter is found.
* `map`: applies a callback function to a given variable.
* `middle`: returns the middle value/s of an array.
* `tail`: returns everything but the first value of an array.
* `takeUntil`: returns all the values of an array upto a given value.
* `without`: returns an array without the values given (in an array form).