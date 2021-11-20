import * as ActionTypes from "./ActionTypes";

export const comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    //Is this what I do for task 3 Do I change "comments" to "comment"? What about the id?
    case ActionTypes.ADD_COMMENT:
      const comment = action.payload;
      comment.id = state.comments.length;
      return {
        ...state,
        errMess: null,
        comments: state.comments.concat(comment),
      };

    default:
      return state;
  }
};
