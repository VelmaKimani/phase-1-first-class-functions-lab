const returnFirstTwoDrivers = function(drivers) {
    const newDrivers = [...drivers];
    newDrivers.splice(-2);
   // newDrivers.slice(0, 2);
      return newDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    const newDrivers = [...drivers];
    newDrivers.splice(0, 2);
    newDrivers.slice(-2);
      return newDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
     return function(fare){
        return fare * integer;
     }
}
createFareMultiplier(4);

function fareDoubler(createFareMultiplier) {
     return createFareMultiplier * 2;    
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3;
}


const filteredDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
function selectDifferentDrivers(drivers, func) {

    return func(drivers);
}


