/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { notificationUnreadNum, notificationUnreadList, notificationReadList } from '../services/notification';
import { browserHistory } from 'react-router';

function* getNotificationUnreadNum(action) {
	try {
		const { jsonResult } = yield call(notificationUnreadNum);
		if (jsonResult.success) {
			yield put({
				type: 'notification/unreadNum/success',
				unreadNum: jsonResult.data.unreadNum,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'notification/unreadNum/failed',
			err,
		});
	}
}

function* getNotificationUnreadList(action) {
	try {
		const { jsonResult } = yield call(notificationUnreadList);
		if (jsonResult.success) {
			yield put({
				type: 'notification/unread/success',
				unreadList: jsonResult.data.unreadList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'notification/unread/failed',
			err,
		});
	}
}

function* getNotificationReadList(action) {
	try {
		const { jsonResult } = yield call(notificationReadList);
		if (jsonResult.success) {
			yield put({
				type: 'notification/read/success',
				readList: jsonResult.data.readList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'notification/read/failed',
			err,
		});
	}
}

function* watchGetNotificationUnreadNum() {
	yield takeLatest('notification/unreadNum', getNotificationUnreadNum);
}

function* watchGetNotificationUnreadList() {
	yield takeLatest('notification/unread', getNotificationUnreadList);
}

function* watchGetNotificationReadList() {
	yield takeLatest('notification/read', getNotificationReadList);
}

export default function* () {
	yield fork(watchGetNotificationUnreadNum);
	yield fork(watchGetNotificationUnreadList);
	yield fork(watchGetNotificationReadList);
}