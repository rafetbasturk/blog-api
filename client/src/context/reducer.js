import {
  GENERATE_ALERT,
  CLEAR_ALERT,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGIN_REGISTER_BEGIN,
  LOGIN_REGISTER_SUCCESS,
  LOGIN_REGISTER_ERROR,
  LOGOUT_USER,
  GET_BEGIN,
  GET_SUCCESS,
  CHANGE_PAGE,
  COMMENT_BEGIN,
  COMMENT_SUCCESS,
  EDIT_COMMENT_BEGIN,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  POST_BEGIN,
  POST_SUCCESS,
  POST_ERROR,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  HANDLE_CHANGE,
  SET_IS_EDITING,
  POST_EDIT_START,
  POST_EDIT_SUCCESS,
  POST_EDIT_ERROR,
  CLEAR_VALUES,
  SET_IS_COMMENT_EDITING
} from "./actions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  switch (action.type) {
    case GENERATE_ALERT:
      return {
        ...state,
        showAlert: true,
        ...action.payload
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    case GET_CURRENT_USER_BEGIN:
      return {
        ...state,
        userLoading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: action.payload.user
      };
    case LOGIN_REGISTER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: `${action.payload.endPoint === "login" ? "Login Successful" : "User Created"}! Redirecting...`,
        user: action.payload.user,
      };
    case LOGIN_REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case LOGOUT_USER:
      return {
        ...initialState,
        userLoading: false
      };
    case GET_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case CHANGE_PAGE:
      return {
        ...state,
        ...action.payload
      };
    case COMMENT_BEGIN:
      return {
        ...state,
        isCommentLoading: true
      };
    case COMMENT_SUCCESS:
      return {
        ...state,
        isCommentLoading: false,
        ...action.payload
      };
    case CREATE_COMMENT_BEGIN:
      return {
        ...state,
        isCommentLoading: true,
      };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        isCommentLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: "Comment Created. Loading...",
      };
    case CREATE_COMMENT_ERROR:
      return {
        ...state,
        isCommentLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case DELETE_COMMENT_BEGIN:
      return {
        ...state,
        isCommentLoading: true,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        isCommentLoading: false,
        showAlert: true,
        alertType: 'success',
        alertText: action.payload.msg,
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        isCommentLoading: false,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    case EDIT_COMMENT_BEGIN:
      return {
        ...state,
        isCommentLoading: true,
      };
    case EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        isCommentLoading: false,
        isCommentEditing: false,
      };
    case EDIT_COMMENT_ERROR:
      return {
        ...state,
        isCommentLoading: false,
        isCommentEditing: false,
        alertType: 'danger',
        alertText: action.payload.msg
      };
    case POST_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case POST_ERROR:
      return {
        ...state,
        isLoading: false
      };
    case HANDLE_CHANGE:
      const { name, value, type, checked } = action.payload
      return {
        ...state,
        [name]: type === "checkbox" ? checked : value
      }
    case CLEAR_VALUES:
      return {
        ...state,
        page: 1,
        isEditing: false,
        postId: "",
        title: "",
        text: "",
        published: false,
        isCommentEditing: false,
        commentId: "",
        commentText: "",
      }
    case SET_IS_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing,
        ...action.payload
      };
    case SET_IS_COMMENT_EDITING:
      const [selectedComment] = state.comments.filter(comment => comment.id === action.payload.commentId)
      return {
        ...state,
        // isCommentEditing: !state.isCommentEditing,
        isCommentEditing: true,
        commentId: action.payload.commentId,
        commentText: selectedComment.text
      };
    case POST_EDIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isEditing: false,
        ...action.payload
      };
    case POST_EDIT_ERROR:
      return {
        ...state,
        isLoading: false,
        isEditing: true,
        showAlert: true,
        alertType: 'danger',
        alertText: action.payload.msg,
      };
    default:
      throw new Error(`no such action :${action.type}`);
  }
};
export default reducer;