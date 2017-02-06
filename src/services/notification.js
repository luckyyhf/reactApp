/**
 * Created by yeats on 2016/8/15.
 */
import xFetch from './xFetch';

export async function notificationUnreadNum() {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}
export async function notificationUnreadList() {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}

export async function notificationReadList() {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}