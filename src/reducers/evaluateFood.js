/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const evaluateFood = handleActions({
	['evaluateFood/evaluateFood/success'](state, action) {
		return { ...state,
			evaluateFoodNum: action.evaluateFoodNum
		};
	},
	['evaluateFood/evaluateFood/failed'](state) {
		return { ...state,
		};
	},
}, {
	evaluateFoodNum: 0,
});

export default evaluateFood;