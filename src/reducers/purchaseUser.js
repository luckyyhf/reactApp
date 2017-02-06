/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const purchaseUser = handleActions({
	['purchaseUser/purchaseUserList/success'](state, action) {
		return { ...state,
			purchaseUser: action.purchaseUser
		};
	},
	['purchaseUser/purchaseUserList/failed'](state) {
		return { ...state,
			purchaseUser: []
		};
	},
}, {
	purchaseUser: [],
});

export default purchaseUser;