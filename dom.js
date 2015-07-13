function animateWorld(frame, world) {
	setTimeout(function() {
		world.turn();
		frame.innerHTML = world.toString();
		animateWorld(frame, world);
	}, 400);
}
var frameOne = document.getElementById('frame-one');
var worldOne = new World(plan, {"#": Wall,
							    "o": BouncingCritter});
animateWorld(frameOne, worldOne);

var frameTwo = document.getElementById('frame-two');
var worldTwo = new World(planTwo, {"#": Wall,
								   "o": BouncingCritter,
								   "~": WallFollower});
animateWorld(frameTwo, worldTwo);

var frameThree = document.getElementById('frame-three');
var worldThree = new LifelikeWorld(planThree, {"#": Wall,
							    		 	   "O": PlantEater,
							    		 	   "0": SmartPlantEater,
							    		 	   "*": Plant});
animateWorld(frameThree, worldThree);