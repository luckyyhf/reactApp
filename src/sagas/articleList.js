/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { articleList } from '../services/articleList';
import { browserHistory } from 'react-router';

function* getArticleList(action) {
	try {
		const { jsonResult } = yield call(articleList);
		if (jsonResult.success) {
			yield put({
				type: 'articleList/success',
				articleCultureList: jsonResult.data.articleCultureList,
				articleLeaningList: jsonResult.data.articleLeaningList,
				articleTieInList: jsonResult.data.articleTieInList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'articleList/failed',
			err,
		});
	}
}

function* watchGetArticleList() {
	yield takeLatest('articleList', getArticleList);
}

export default function* () {
	yield fork(watchGetArticleList);
}