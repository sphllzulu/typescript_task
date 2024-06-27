 enum TrafficLight {
    Red,//0 by default unless stated otherwise
    Yellow,//1
    Green//2
}

let Light: TrafficLight = TrafficLight.Red;//first light will be red

function changeLight() {
    switch (Light) {
        case TrafficLight.Red:
            Light = TrafficLight.Green;//if the robot light is red, it will be changed to green
            break;
        case TrafficLight.Green:
            Light = TrafficLight.Yellow;//if its green it will be set to yellow
            break;
        case TrafficLight.Yellow:
            Light = TrafficLight.Red;//if its yellow, it will be set to red
            break;
    }
    return console.log(`${TrafficLight[Light]}`);
}

function startTrafficLight() {
    console.log(` ${TrafficLight[Light]}`);
    setInterval(changeLight, 10000); //this will set up a timer that will call the changelight function every 10 secs
}

startTrafficLight();

