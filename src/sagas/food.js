/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { foodDetail } from '../services/food';
import { browserHistory } from 'react-router';

function* getFoodDetail(action) {
	try {
		const { jsonResult } = yield call(foodDetail);
		if (jsonResult.success) {
			yield put({
				type: 'food/details/success',
				food: jsonResult.data.food,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'food/details/failed',
			err,
		});
	}
}

function* watchGetFoodDetail() {
	yield takeLatest('food/details', getFoodDetail);
}

export default function* () {
	yield fork(watchGetFoodDetail);
}