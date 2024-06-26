"use strict";
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["Red"] = 0] = "Red";
    TrafficLight[TrafficLight["Yellow"] = 1] = "Yellow";
    TrafficLight[TrafficLight["Green"] = 2] = "Green";
})(TrafficLight || (TrafficLight = {}));
let currentLight = TrafficLight.Red;
function changeLight() {
    switch (currentLight) {
        case TrafficLight.Red:
            currentLight = TrafficLight.Green;
            break;
        case TrafficLight.Green:
            currentLight = TrafficLight.Yellow;
            break;
        case TrafficLight.Yellow:
            currentLight = TrafficLight.Red;
            break;
    }
    console.log(`Changed light to: ${TrafficLight[currentLight]}`);
}
function startTrafficLight() {
    console.log(`Initial light: ${TrafficLight[currentLight]}`);
    setInterval(changeLight, 10000); // This will change the light every 10 seconds
}
startTrafficLight();
