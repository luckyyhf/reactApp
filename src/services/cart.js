/**
 * Created by yeats on 2016/8/15.
 */
import xFetch from './xFetch';

export async function cartFoodNum(location) {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}

export async function cartFoodList(location) {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}

export async function addCartFood(location) {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}
export async function removeCartFood(location) {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}