/**
 * Created by yeats on 2016/8/15.
 */
import xFetch from './xFetch';

export async function articleList() {
	return xFetch('', {//TODO 填写url
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}