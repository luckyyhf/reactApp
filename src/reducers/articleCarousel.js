/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const articleCarousel = handleActions({
	['articleCarousel/articleCarouselUrls/success'](state, action) {
		return { ...state,
			articleCarouselUrls: action.articleCarouselUrls
		};
	},
	['articleCarousel/articleCarouselUrls/failed'](state) {
		return { ...state,
		};
	},
}, {
	articleCarouselUrls: [],
});

export default articleCarousel;