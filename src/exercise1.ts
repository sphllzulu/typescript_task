 enum TrafficLight {
    Red,
    Yellow,
    Green
}

let currentLight: TrafficLight = TrafficLight.Red;

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
    setInterval(changeLight, 10000); 
}

startTrafficLight();

