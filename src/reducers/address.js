/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const address = handleActions({
	['address/updateAddress/success'](state, action) {
		return { ...state,
			address: action.address
		};
	},
	['address/updateAddress/failed'](state) {
		return { ...state,
			address: {}
		};
	},
	['address/details/success'](state, action) {
		return { ...state,
			address: action.address
		};
	},
	['address/details/failed'](state) {
		return { ...state,
			address: {}
		};
	},
	['address/removeAddress/success'](state, action) {
		return { ...state,
			address: action.address
		};
	},
	['address/removeAddress/failed'](state) {
		return { ...state,
			address: {}
		};
	},
	['address/addAddress/success'](state, action) {
		return { ...state,
			address: action.address
		};
	},
	['address/addAddress/failed'](state) {
		return { ...state,
			address: {}
		};
	},
}, {
	address: {},
});

export default address;