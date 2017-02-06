/**
 * Created by yeats on 2016/8/15.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const order = handleActions({
	['order/buyAgain/success'](state, action) {
		return { ...state,
			//order: action.order TODO 待定
		};
	},
	['order/buyAgain/failed'](state) {
		return { ...state,
			//order: {}
		};
	},
	['order/payOrder/success'](state, action) {
		return { ...state,
			order: action.order
		};
	},
	['order/payOrder/failed'](state) {
		return { ...state,
			order: {}
		};
	},
	['order/removeOrder/success'](state, action) {
		return { ...state,
			order: action.order
		};
	},
	['order/removeOrder/failed'](state) {
		return { ...state,
			order: {}
		};
	},
}, {
	order: {},
});

export default order;