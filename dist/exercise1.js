"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green"; //2
})(TrafficLight || (TrafficLight = {}));
let Light = TrafficLight.Red; //first light will be red
function changeLight() {
    switch (Light) {
        case TrafficLight.Red:
            Light = TrafficLight.Green; //if the robot light is red, it will be changed to green
            break;
        case TrafficLight.Green:
            Light = TrafficLight.Yellow; //if its green it will be set to yellow
            break;
        case TrafficLight.Yellow:
            Light = TrafficLight.Red; //if its yellow, it will be set to red
            break;
    }
    return console.log(`${TrafficLight[Light]}`);
}
function startTrafficLight() {
    console.log(` ${TrafficLight[Light]}`);
    setInterval(changeLight, 10000); //this will set up a timer that will call the changelight function every 10 secs
}
startTrafficLight();
