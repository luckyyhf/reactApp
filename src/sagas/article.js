/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { articleDetail } from '../services/article';
import { browserHistory } from 'react-router';

function* getArticleDetail(action) {
	try {
		const { jsonResult } = yield call(articleDetail);
		if (jsonResult.success) {
			yield put({
				type: 'article/details/success',
				articleDetail: jsonResult.data.articleDetail,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'article/details/failed',
			err,
		});
	}
}

function* watchGetArticleDetail() {
	yield takeLatest('article/details', getArticleDetail);
}

export default function* () {
	yield fork(watchGetArticleDetail);
}