/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const cart = handleActions({
	['cart/cartFoodNum/success'](state, action) {
		return { ...state,
			cartFoodNum: action.cartFoodNum
		};
	},
	['cart/cartFoodNum/failed'](state) {
		return { ...state,//TODO 出错状态如何展示
		};
	},
	['cart/cartFoodList/success'](state, action) {
		return { ...state,
			cartFoods: action.cartFoods
		};
	},
	['cart/cartFoodList/failed'](state) {
		return { ...state,
			cartFoods: []
		};
	},
	['cart/addFood/success'](state, action) {
		return { ...state,
			cartFoods: action.cartFoods,
			cartFoodNum: action.cartFoodNum,
		};
	},
	['cart/addFood/failed'](state, action) {
		return { ...state,
			cartFoods: [],
			err: action.err
		};
	},
	['cart/removeFood/success'](state, action) {
		return { ...state,
			cartFoods: action.cartFoods,
			cartFoodNum: action.cartFoodNum,
		};
	},
	['cart/removeFood/failed'](state, action) {
		return { ...state,
			cartFoods: [],
			err: action.err
		};
	},
}, {
	cartFoodNum: 0,
	cartFoods: [],//需要二维数组，第一层为购物袋，第二层为食物
	err: ''
});

export default cart;