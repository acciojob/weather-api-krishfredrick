//your JS code here. If required.

const fetchingWeather = async()=>{
	const response = await fetch(`https://openweathermap.org/api/london`);
	return response.json();
}

const handleWeather = async()=>{
	let data;
	try {
		data = await fetchingWeather();
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.innerText = data;
	} catch (error) {
		console.log(error);
	}
}
