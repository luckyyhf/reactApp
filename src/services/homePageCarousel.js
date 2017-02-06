/**
 * Created by yeats on 2016/8/12.
 */
import xFetch from './xFetch';

export async function homePageCarouselList() {
	 return xFetch('/api/homepage/carousel', {
	 	method: 'POST',
	 	headers: {
	 		'Accept': 'application/json',
	 		'Content-Type': 'application/json'
	 	},
	 	body: JSON.stringify({

	 	})
	 });
	//return xFetch('/apps/takeOut/business');
}