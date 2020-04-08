const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMMENT_SUCCESS":
      return { ...state, feedback: [...state.feedback, action.payload] };
    // return { ...state, comments: [...state.comments, action.payload] };

    default:
      return state;
  }
};
