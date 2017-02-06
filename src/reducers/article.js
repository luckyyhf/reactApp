/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const article = handleActions({
	['article/details/success'](state, action) {
		return { ...state,
			articleDetail: action.articleDetail
		};
	},
	['article/details/failed'](state) {
		return { ...state,
			articleDetail: {}
		};
	},
}, {
	articleDetail: {},
});

export default article;