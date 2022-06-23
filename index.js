// Code your solution in this file!
const drivers = ['Antonia','Nuru','Amari',"Mo"];
//console.log drivers.slice(0,2);
const returnFirstTwoDrivers = function(drivers) {
    return (drivers.slice(0,2)); 
}
const returnLastTwoDrivers = function(drivers) {
    return (drivers.slice(2)); 
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}   
//createFareMultiplier(function(multiplier, fare) {return multiplier * fare}); 

//const fareMult = (multiplier,fare) => multiplier * fare;

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers,chooseDriver) {
    return chooseDriver(drivers);
}
