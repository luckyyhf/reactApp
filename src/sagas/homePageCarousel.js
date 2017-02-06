/**
 * Created by yeats on 2016/8/12.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { homePageCarouselList } from '../services/homePageCarousel';
import { browserHistory } from 'react-router';

function* getHomePageCarouselLists(action) {
	try {
		const { jsonResult } = yield call(homePageCarouselList);
		if (jsonResult.data) {
			yield put({
				type: 'homepage/carousel/success',
				homePageCarouselUrls: jsonResult.data,
			});
		}
	} catch (err) {
		yield put({
			type: 'homepage/carousel/failed',
			err,
		});
	}
}

function* watchGetHomePageCarouselLists() {
	yield takeLatest('homepage/carousel', getHomePageCarouselLists);
}

export default function* () {
	yield fork(watchGetHomePageCarouselLists);
}