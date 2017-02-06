/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const homePageCarousel = handleActions({
	['homepage/carousel/success'](state, action) {
		return { ...state,
			homePageCarouselUrls: action.homePageCarouselUrls
		};
	},
	['homepage/carousel/failed'](state) {
		return { ...state,
			homePageCarouselUrls: []
		};
	},
}, {
	homePageCarouselUrls: [],
});

export default homePageCarousel;