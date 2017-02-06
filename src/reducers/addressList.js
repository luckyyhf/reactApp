/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const addressList = handleActions({
	['addressList/getList/success'](state, action) {
		return { ...state,
			addressList: action.addressList
		};
	},
	['addressList/getList/failed'](state) {
		return { ...state,
			addressList: []
		};
	},
}, {
	addressList: [],
});

export default addressList;