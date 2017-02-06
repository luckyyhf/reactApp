/**
 * Created by yeats on 2016/8/15.
 */
import { takeLatest, delay } from 'redux-saga';
import { take, call, put, fork, cancel } from 'redux-saga/effects';
import { homePageFoodList, homePageSearchFoodList } from '../services/foodList';
import { browserHistory } from 'react-router';

function* getHomePageFoodLists(action) {
	try {
		const { jsonResult } = yield call(homePageFoodList);
		if (jsonResult.success) {
			yield put({
				type: 'foodList/homeFoodList/success',
				businessList: jsonResult.data.businessList,
				chineseFoodList: jsonResult.data.foodsList.TOFCT_CHINESE,
				westernFoodList: jsonResult.data.foodsList.TOFCT_WESTERN,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'foodList/homeFoodList/failed',
			err,
		});
	}
}

function* getHomePageSearchFoodLists(action) {
	try {
		const { jsonResult } = yield call(homePageSearchFoodList);
		if (jsonResult.success) {
			yield put({
				type: 'foodList/searchFoodList/success',
				searchFoodList: jsonResult.data.searchFoodList,
			});
		} else {

		}
	} catch (err) {
		yield put({
			type: 'foodList/searchFoodList/failed',
			err,
		});
	}
}

function* watchGetHomePageFoodList() {
	yield takeLatest('foodList/homeFoodList', getHomePageSearchFoodLists);
}

function* watchGetHomePageSearchFoodList() {
	yield takeLatest('foodList/searchFoodList', getHomePageSearchFoodLists);
}

export default function* () {
	yield fork(watchGetHomePageFoodList);
	yield fork(watchGetHomePageSearchFoodList);
}