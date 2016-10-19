import axios from 'axios';
import API_KEY from '../api_key';

//api_key is a file that is in the .gitignore. Make a file that exports the api key as a const.

//API used is from the Call 5 day / 3 hour forecast data of openweathermap.org

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 
//use backticks - ` `- and ${} to add function/variable values to strings

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	// the root url with the request information query (which city, followed by
	// a default of the country which will always be the US for now until modified)
	const request = axios.get(url);
	//axios allows for an easy get request with promises. We will use this 
	//on the url and make that our payload.

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}