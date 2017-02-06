/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const foodList = handleActions({
	['foodList/homeFoodList/success'](state, action) {
		return { ...state,
			chineseFoodList: action.chineseFoodList,
			westernFoodList: action.westernFoodList,
			businessList: action.businessList,
		};
	},
	['foodList/homeFoodList/failed'](state) {
		return { ...state,
			chineseFoodList: [],
			westernFoodList: [],
			businessList: []
		};
	},
	['foodList/searchFoodList/success'](state, action) {
		return { ...state,
			searchFoodList: action.searchFoodList
		};
	},
	['foodList/searchFoodList/failed'](state) {
		return { ...state,
			searchFoodList: []
		};
	},
}, {
	businessList: [],
	chineseFoodList: [],
	westernFoodList: [],
	searchFoodList: [],
});

export default foodList;