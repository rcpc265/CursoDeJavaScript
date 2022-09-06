'use strict'
const heightInCentimeters = 180;
const heightInMeters = 1.85;

const weightInKilograms = 70.3;

const roundedHeight = Math.ceil(heightInMeters);

const roundedWeight = Math.floor(weightInKilograms);

const isEqual = (Number.MAX_VALUE + 1) === Number.MAX_VALUE;
console.log(isEqual);