/**
 * Created by yeats on 2016/8/15.
 */
import xFetch from './xFetch';

export async function homePageFoodList(location) {
	var url = '/apps/takeOut/' + location.indexOf(',') >= 0 ? 'allFoodsGps/' : 'allFoodsBid/' + location;
	return xFetch(url, {
		method: 'GET',
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
	});
}
export async function getHomePageSearchFoodLists() {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		}
	});
}