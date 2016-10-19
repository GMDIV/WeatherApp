import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) { 
	switch(action.type){ 
		case FETCH_WEATHER: 
			return [action.payload.data, ...state]; //the .data has the information we need. 
			//This will concat with the information inside our state
	}
	return state;
}