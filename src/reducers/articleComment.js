/**
 * Created by yeats on 2016/8/12.
 */
import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const articleComment = handleActions({
	['articleComment/commentArticle/success'](state, action) {
		return { ...state,
			articleCommentList: action.articleCommentList
		};
	},
	['articleComment/commentArticle/failed'](state) {
		return { ...state,
			articleCommentList: []
		};
	},
	['articleComment/commentPerson/success'](state, action) {
		return { ...state,
			articleCommentList: action.articleCommentList
		};
	},
	['articleComment/commentPerson/failed'](state) {
		return { ...state,
			articleCommentList: []
		};
	},
}, {
	articleCommentList: [],
});

export default articleComment;