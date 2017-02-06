/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const articleList = handleActions({
	['articleList/success'](state, action) {
		return { ...state,
			articleCultureList: action.articleCultureList,
			articleLeaningList: action.articleLeaningList,
			articleTieInList: action.articleTieInList,
		};
	},
	['articleList/failed'](state) {
		return { ...state,
			articleCultureList: [],
			articleLeaningList: [],
			articleTieInList: [],
		};
	},
}, {
	articleCultureList: [],
	articleLeaningList: [],
	articleTieInList: [],
});

export default articleList;