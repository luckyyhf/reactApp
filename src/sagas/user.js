/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { userLogin, userRegister } from '../services/user';
import { browserHistory } from 'react-router';

function* userLoginFunc(action) {
	try {
		const { jsonResult } = yield call(userLogin);
		if (jsonResult.success) {
			yield put({
				type: 'account/login/success',
				userDetail: jsonResult.data.userDetail,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'account/login/failed',
			err,
		});
	}
}

function* userRegisterFunc(action) {
	try {
		const { jsonResult } = yield call(userRegister);
		if (jsonResult.success) {
			yield put({
				type: 'account/register/success',
				userDetail: jsonResult.data.userDetail,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'account/register/failed',
			err,
		});
	}
}

function* watchUserLogin() {
	yield takeLatest('account/login', userLoginFunc);
}

function* watchUserRegister() {
	yield takeLatest('account/register', userRegisterFunc);
}

export default function* () {
	yield fork(watchUserLogin);
	yield fork(watchUserRegister);
}