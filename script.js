//your JS code here. If required.

const fetchingWeather = async()=>{
	const response = await fetch(`https://openweathermap.org/api`);
	return response.json();
}

const handleWeather = ()=>{
	let data;
	try {
		data = fetchingWeather();
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.innerText = data;
	} catch (error) {
		console.log(error);
	}
}
