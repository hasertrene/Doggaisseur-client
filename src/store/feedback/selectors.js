export function selectFeedbackDetails(reduxState) {
  // console.log("state", reduxState.feedback);
  return reduxState.feedback;
}

export const selectComments = (state) => state.feedback;
