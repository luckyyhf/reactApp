/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const couponList = handleActions({
	['couponList/getList/success'](state, action) {
		return { ...state,
			couponList: action.couponList
		};
	},
	['couponList/getList/failed'](state) {
		return { ...state,
			couponList: []
		};
	},
}, {
	couponList: [],
});

export default couponList;