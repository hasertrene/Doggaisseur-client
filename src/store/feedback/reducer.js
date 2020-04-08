const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMMENT_SUCCESS":
      return [...state, action.payload];
    case "FETCH_COMMENTS_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
