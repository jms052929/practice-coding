const COORDS = 'coords';

function askForCoords(){
	
}

function loadCoords(){
	const loadedCords = localStorage.getItem(COORDS);
	inf(loadCoords === null){
		askForCoords();
	} else {
		//getWeather
	}
}

function init(){
		loadCoords();
}

init();