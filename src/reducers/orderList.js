/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const orderList = handleActions({
	['orderList/getList/success'](state, action) {
		return { ...state,
			orderList: action.orderList
		};
	},
	['orderList/getList/failed'](state) {
		return { ...state,
			orderList: []
		};
	},
}, {
	orderList: [],
});

export default orderList;