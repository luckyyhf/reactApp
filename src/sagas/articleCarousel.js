/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { articleCarouselUrls } from '../services/articleCarousel';
import { browserHistory } from 'react-router';

function* getArticleCarouselUrls(action) {
	try {
		const { jsonResult } = yield call(articleCarouselUrls);
		if (jsonResult.success) {
			yield put({
				type: 'articleCarousel/articleCarouselUrls/success',
				articleCarouselUrls: jsonResult.data.articleCarouselUrls,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'articleCarousel/articleCarouselUrls/failed',
			err,
		});
	}
}

function* watchGetArticleCarouselUrls() {
	yield takeLatest('articleCarousel/articleCarouselUrls', getArticleCarouselUrls);
}

export default function* () {
	yield fork(watchGetArticleCarouselUrls);
}