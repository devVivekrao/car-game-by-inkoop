const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
  console.clear();
  startGame();
});

function startGame() {
           
  let totalSteps = 0;
  let petrol = 50; 
  let destination = 100; 
  let refill = 30; 
  let move = 1;
  let petrolPumps = [];

  // generating 6 random petrol pumps
  for ( i = 0; i < 6; i++ ) {
    pump = Math.floor(Math.random() * 100); // 1-100
    petrolPumps[i] = pump;
  }
  
  // sorting petrolPump array
  petrolPumps.sort((a, b) => a - b);
  
  //array to string conversion using join
  petrolPumpString = petrolPumps.join(', ');

  // view on console
  console.log("Game started");
  console.log("Petrol pumps generated at", petrolPumpString);

  // run loop while car has petrol OR reached 100km
  while ( petrol > 0 ) {

    // generate random step between 1-6
    let step = Math.floor(Math.random() * 6+1);

    // track the total steps coverd by car
    totalSteps += step;

    //reduce petrol by calcutaling milage which is 0.5 km/l 
    petrol -= (step * 2);


    if( petrol < 0 ){
      petrol = 0;
    }

    // check for refill
    for ( i = 0; i < 6; i++ ) {
      
      if( totalSteps == petrolPumps[i] ){
        petrol += refill;
      }
      
    }
    
    // log the game on console
    console.log( "Move", move, "- car at ", totalSteps,", Petrol remaining ", petrol );
    
    // check for destination reached
    if( totalSteps >= destination ){
      console.log("Reached destination")
      break;
    }

    // move counter
    move += 1;
  }
  
  console.log("Game over");


}
