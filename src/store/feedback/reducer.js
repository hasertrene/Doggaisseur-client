const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMMENT_SUCCESS":
      return [...state, action.payload];

    default:
      return state;
  }
};
