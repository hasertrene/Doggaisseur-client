import { apiUrl } from "../../config/constants";
import axios from "axios";

function postCommentSuccess(comment) {
  return {
    type: "POST_COMMENT_SUCCESS",
    payload: comment,
  };
}

export function postCommentThunk(comment, serviceId) {
  return async function (dispatch, getState) {
    console.log("TEXT IN THUNK", comment);
    // console.log("RADIO IN THUNK", serviceId);

    const state = getState();
    // console.log("STATE IN THUNK", state);

    const token = state.user.token;

    const response = await axios.post(
      `${apiUrl}/feedback`,
      {
        comment: comment,
        serviceId: serviceId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // console.log("ACTION RESP", response.data);
    dispatch(postCommentSuccess(response.data.feedback));
  };
}

function fetchCommentsSuccess(comments) {
  return {
    type: "FETCH_COMMENTS_SUCCESS",
    payload: comments,
  };
}

export function fetchComments() {
  return async function (dispatch, getState) {
    const state = getState();
    const token = state.user.token;

    const response = await axios.get(`${apiUrl}/feedback`);

    console.log("RESPONSE", response.data);
    dispatch(fetchCommentsSuccess(response.data));
  };
}
