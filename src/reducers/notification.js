/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const notification = handleActions({
	['notification/unreadNum/success'](state, action) {
		return { ...state,
			unreadNum: action.unreadNum
		};
	},
	['notification/unreadNum/failed'](state) {
		return { ...state,
			unreadNum: 0
		};
	},
	['notification/unread'](state) {
		return { ...state,
			loading: true
		};
	},
	['notification/unread/success'](state, action) {
		return { ...state,
			unreadList: action.unreadList,
			loading:false
		};
	},
	['notification/unread/failed'](state) {
		return { ...state,
			unreadList: [],
			loading:false
		};
	},
	['notification/read'](state) {
		return { ...state,
			loading: true
		};
	},
	['notification/read/success'](state, action) {
		return { ...state,
			readList: action.readList,
			loading:false
		};
	},
	['notification/read/failed'](state) {
		return { ...state,
			readList: [],
			loading:false
		};
	},
}, {
	unreadNum: 0,
	loading: false,
	unreadList: [],
	readList: []
});

export default notification;