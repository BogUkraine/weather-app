const initialState = [];

export default function currentWeather(state = initialState, action) {
	switch(action.type){
		case('CURRENT_WEATHER_IS_FETCHED'): {
			return action.payload;
		}
		default: {
			return state;
		}
	}
}