/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { cartFoodNum, cartFoodList, addCartFood, removeCartFood } from '../services/cart';
import { browserHistory } from 'react-router';

function* getCartFoodNum(action) {
	try {
		const { jsonResult } = yield call(cartFoodNum);
		if (jsonResult.success) {
			yield put({
				type: 'cart/cartFoodNum/success',
				cartFoodNum: jsonResult.data.cartFoodNum,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'cart/cartFoodNum/failed',
			err,
		});
	}
}

function* getCartFoodList(action) {
	try {
		const { jsonResult } = yield call(cartFoodList);
		if (jsonResult.success) {
			yield put({
				type: 'cart/cartFoodList/success',
				cartFoods: jsonResult.data.cartFoods,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'cart/cartFoodList/failed',
			err,
		});
	}
}

function* addFood(action) {
	try {
		const { jsonResult } = yield call(addCartFood);
		if (jsonResult.success) {
			yield put({
				type: 'cart/addFood/success',
				cartFoods: jsonResult.data.cartFoods,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'cart/addFood/failed',
			err,
		});
	}
}
function* removeFood(action) {
	try {
		const { jsonResult } = yield call(removeCartFood);
		if (jsonResult.success) {
			yield put({
				type: 'cart/removeFood/success',
				cartFoods: jsonResult.data.cartFoods,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'cart/removeFood/failed',
			err,
		});
	}
}

function* watchGetCartFoodNum() {
	yield takeLatest('cart/cartFoodNum', getCartFoodNum);
}

function* watchGetCartFoodList() {
	yield takeLatest('cart/cartFoodList', getCartFoodList);
}

function* watchAddFood() {
	yield takeLatest('cart/addFood', addFood);
}

function* watchRemoveFood() {
	yield takeLatest('cart/removeFood', removeFood);
}

export default function* () {
	yield fork(watchGetCartFoodNum);
	yield fork(watchGetCartFoodList);
	yield fork(watchAddFood);
	yield fork(watchRemoveFood);
}