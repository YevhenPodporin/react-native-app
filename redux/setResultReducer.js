import { CLEAR_DATA_BTN, IMAGES, SEARCH_DATA_BTN, USERS } from "./types";

const initialState = {
	data: [],
}

export function dataOfImages(state = initialState, action) {
	switch (action.type) {
		case IMAGES:
			return { ...state, data: action.payload };

		default: return state
	}
}
