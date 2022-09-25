import { IMAGES } from "./types";


export function getImages(payload) {
	return {
		type: IMAGES,
		payload
	}
}

export function getDataOfImages() {
	return async function (dispatch) {
		const IMAGES_URL = 'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
		const request = await fetch(IMAGES_URL);
		const data = await request.json();
		dispatch(getImages(data))
	}
}
