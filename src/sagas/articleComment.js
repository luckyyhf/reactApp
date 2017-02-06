/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { commentArticle, commentPerson } from '../services/articleComment';
import { browserHistory } from 'react-router';

function* doCommentArticle(action) {
	try {
		const { jsonResult } = yield call(commentArticle);
		if (jsonResult.success) {
			yield put({
				type: 'articleComment/commentArticle/success',
				articleCommentList: jsonResult.data.articleCommentList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'articleComment/commentArticle/failed',
			err,
		});
	}
}

function* doCommentPerson(action) {
	try {
		const { jsonResult } = yield call(commentPerson);
		if (jsonResult.success) {
			yield put({
				type: 'articleComment/commentPerson/success',
				articleCommentList: jsonResult.data.articleCommentList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'articleComment/commentPerson/failed',
			err,
		});
	}
}

function* watchCommentArticle() {
	yield takeLatest('articleComment/commentArticle', doCommentArticle);
}

function* watchCommentPerson() {
	yield takeLatest('articleComment/commentPerson', doCommentPerson);
}

export default function* () {
	yield fork(watchCommentArticle);
	yield fork(watchCommentPerson);
}