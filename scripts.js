// Write your JavaScript code here.
// Remember to pay attention to page loading!
// @ts-check

// add load event handler to window
window.addEventListener("load", function() {
// put DOM code here to ensure elements have been loaded
    //console.log('window loaded');

    let flightStatusParagraph = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    let rocket = document.getElementById('rocket');
    
    //let horizontal = 100;
    //let vertical = 100;
    spaceShuttleHeight.innerHTML = "0";
    rocket.style.left = '100px';
    rocket.style.top =  '100px';

    let takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(event) {
        //console.log("takeOff click event");
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (response) {
            //console.log(flightStatusParagraph.innerHTML);
            flightStatusParagraph.innerHTML = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        }
    })

    let landing = document.getElementById("landing");
    landing.addEventListener("click", function(event) {
        //console.log("landing click event");
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatusParagraph.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = '0';
    })

    let missionAbort = document.getElementById("missionAbort");
    missionAbort.addEventListener("click", function(event) {
        console.log("missionAbort click event");
        let response = window.confirm('Confirm that you want to abort the mission.');
        if (response) {
            flightStatusParagraph.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = '0';
        }
    })

    let up = document.getElementById("up");
    up.addEventListener("click", function(event){
        //console.log("up click event");
        rocket.style.top = (rocket.offsetTop - 10) + 'px';
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) + 10000);
    })

    let down = document.getElementById("down");
    down.addEventListener("click", function(event){
        //console.log("down click event");
        rocket.style.top = (rocket.offsetTop + 10) + 'px';
        spaceShuttleHeight.innerHTML = String(Number(spaceShuttleHeight.innerHTML) - 10000);
    })
    
    let left = document.getElementById("left");
    left.addEventListener("click", function(event){
        rocket.style.left = (rocket.offsetLeft + 10) + 'px';
    })


    let right = document.getElementById("right");
    right.addEventListener("click", function(event){
        rocket.style.left = (rocket.offsetLeft - 10) + 'px';
            })
});
