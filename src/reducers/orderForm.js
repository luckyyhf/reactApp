/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const info = handleActions({
	['homePage/getCarouselLists'](state) {
		return { ...state, loading: true, };
	},
	['homePage/getCarouselLists/success'](state, action) {
		return { ...state,
			loading: false,
			SlideImage: action.SlideImage
		};
	},
	['homePage/getCarouselLists/failed'](state, action) {
		return { ...state,
			loading: false,
			err: action.err
		};
	},
}, {
	SlideImage: ['http://o8ea97cbs.bkt.clouddn.com/meishi3.png',
		'http://o8ea97cbs.bkt.clouddn.com/meishi3.png',
		'http://o8ea97cbs.bkt.clouddn.com/meishi3.png'],
	loading: false
});

export default info;