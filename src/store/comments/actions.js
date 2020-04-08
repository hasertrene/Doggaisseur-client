import axios from "axios";

function postCommentSuccess(comment) {
  return {
    type: "POST_COMMENT_SUCCESS",
    payload: comment,
  };
}

export function postCommentThunk(text, radio) {
  return async function (dispatch, getState) {
    console.log("TEXT IN THUNK", text);
    console.log("RADIO IN THUNK", radio);

    const state = getState();
    console.log("STATE IN THUNK", state);

    // - we need the token from state
    const token = state.user.token;

    // const response = await axios.post(
    //   `what is route?`,
    //   {
    //     text: text,
    //     radio: radio
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   }
    // );

    // console.log(response);
    // dispatch(postCommentSuccess(response.data));
  };
}
