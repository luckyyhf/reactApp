/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const district = handleActions({
	['district/districtList/success'](state, action) {
		return { ...state,
			districts: action.districts
		};
	},
	['district/districtList/failed'](state) {
		return { ...state,
			districts: []
		};
	},
}, {
	districts: [],
});

export default district;