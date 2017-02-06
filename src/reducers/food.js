/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const food = handleActions({
	['food/details/success'](state, action) {
		return { ...state,
			food: action.food
		};
	},
	['food/details/failed'](state) {
		return { ...state,
			food: {}
		};
	},
}, {
	food: {
	},
});

export default food;