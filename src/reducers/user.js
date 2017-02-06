/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const user = handleActions({
	['account/login/success'](state, action) {
		return { ...state,
			userDetail: action.userDetail
		};
	},
	['account/login/failed'](state) {
		return { ...state,
			userDetail: {}
		};
	},
	['account/register/success'](state, action) {
		return { ...state,
			userDetail: action.userDetail
		};
	},
	['account/register/failed'](state) {
		return { ...state,
			userDetail: {}
		};
	},
	['account/updateUser/success'](state, action) {
		return { ...state,
			userDetail: action.userDetail
		};
	},
	['account/updateUser/failed'](state) {
		return { ...state,
			userDetail: {}
		};
	},
}, {
	userDetail: {},
});

export default user;