import { useReducer, useContext, createContext, useEffect } from 'react';
import authFetch from '../configs/axiosConfig';
import reducer from './reducer';
import {
  GENERATE_ALERT,
  CLEAR_ALERT,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  LOGIN_REGISTER_BEGIN,
  LOGIN_REGISTER_SUCCESS,
  LOGIN_REGISTER_ERROR,
  LOGOUT_USER,
  CHANGE_PAGE,
  GET_BEGIN,
  GET_SUCCESS,
  POST_BEGIN,
  POST_SUCCESS,
  POST_ERROR,
  POST_EDIT_START,
  POST_EDIT_SUCCESS,
  POST_EDIT_ERROR,
  COMMENT_BEGIN,
  COMMENT_SUCCESS,
  CREATE_COMMENT_BEGIN,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  DELETE_COMMENT_BEGIN,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  EDIT_COMMENT_BEGIN,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  SET_IS_EDITING,
  SET_IS_COMMENT_EDITING
} from './actions';

const initialState = {
  userLoading: true,
  isLoading: false,
  isCommentLoading: false,
  isEditing: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: null,
  posts: [],
  post: null,
  postId: "",
  title: "",
  text: "",
  published: false,
  comments: [],
  isCommentEditing: false,
  commentId: "",
  commentText: "",
  numOfPosts: 0,
  numOfPages: 1,
  page: 1
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const generateAlert = ({ alertType, alertText }) => {
    dispatch({ type: GENERATE_ALERT, payload: { alertType, alertText } });
    clearAlert()
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const loginRegister = async (currentUser, endPoint) => {
    dispatch({ type: LOGIN_REGISTER_BEGIN });
    try {
      const { data } = await authFetch.post(`/auth/${endPoint}`, currentUser)
      dispatch({
        type: LOGIN_REGISTER_SUCCESS,
        payload: { ...data, endPoint },
      });
    }
    catch (error) {
      dispatch({
        type: LOGIN_REGISTER_ERROR,
        payload: {
          msg: error.response.data.msg
        }
      });
    }
    clearAlert();
  };

  const logout = async () => {
    await authFetch("/auth/logout")
    dispatch({ type: LOGOUT_USER })
  }

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN })
    try {
      const { data } = await authFetch('/auth/getCurrentUser');
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { ...data },
      });
    } catch (error) {
      if (error.response.status === 401) return
      logout()
    }
  }

  useEffect(() => {
    getCurrentUser()
    // eslint-disable-next-line
  }, [])

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } })
  }

  const getPosts = async () => {
    const { page } = state
    let url = `/posts?page=${page}`
    dispatch({ type: GET_BEGIN })
    try {
      const { data } = await authFetch(url)
      dispatch({ type: GET_SUCCESS, payload: { ...data } })
    } catch (error) {
      return
    }
  }

  const getPost = async (id) => {
    dispatch({ type: GET_BEGIN })
    let url = `/posts/${id}`
    try {
      const { data } = await authFetch(url)
      dispatch({ type: GET_SUCCESS, payload: data })
      getPostComments(id)
    } catch (error) {
      console.log(error.response);
    }
  }

  const getPostComments = async (id) => {
    dispatch({ type: COMMENT_BEGIN })
    try {
      const url = `posts/${id}/comments`
      const { data } = await authFetch(url)
      dispatch({ type: COMMENT_SUCCESS, payload: data })
    } catch (error) {
      console.log(error.response);
    }
  }

  const createComment = async (id, comment) => {
    dispatch({ type: CREATE_COMMENT_BEGIN })
    try {
      await authFetch.post(`posts/${id}/comments`, comment)
      dispatch({ type: CREATE_COMMENT_SUCCESS })
      clearAlert()
      return { ok: true }
    } catch (error) {
      dispatch({
        type: CREATE_COMMENT_ERROR,
        payload: {
          msg: error.response.data.msg
        }
      })
      clearAlert()
      return { ok: false }
    }
  }

  const deleteComment = async (id) => {
    dispatch({ type: DELETE_COMMENT_BEGIN })
    try {
      const url = `comments/${id}`
      const { data } = await authFetch.delete(url)
      dispatch({
        type: DELETE_COMMENT_SUCCESS, payload: {
          msg: data.msg
        }
      })
    } catch (error) {
      dispatch({
        type: DELETE_COMMENT_ERROR, payload: {
          msg: error.response.data.msg
        }
      })
    }
    clearAlert()
  }

  const createPost = async (post) => {
    dispatch({ type: POST_BEGIN })
    try {
      await authFetch.post(`posts`, post)
      dispatch({ type: POST_SUCCESS })
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: POST_ERROR,
        payload: {
          msg: error.response.data.msg
        }
      })
    }
  }

  const deletePost = async (id) => {
    dispatch({ type: POST_BEGIN })
    try {
      const getCommentUrl = `posts/${id}/comments`
      const { data } = await authFetch(getCommentUrl)
      data.comments.forEach(comment => {
        deleteComment(comment.id)
      });
      const deleteUrl = `posts/${id}`
      await authFetch.delete(deleteUrl)
      dispatch({ type: POST_SUCCESS })
    } catch (error) {
      console.log(error.response);
    }
  }

  const handleChange = e => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: e.target,
    })
  }

  const setIsEditing = () => {
    dispatch({
      type: SET_IS_EDITING,
      payload: {
        postId: state.post.id,
        title: state.post.title,
        text: state.post.text,
        published: state.post.published
      }
    })
  }

  const setIsCommentEditing = (commentId) => {
    dispatch({
      type: SET_IS_COMMENT_EDITING,
      payload: commentId
    })
  }

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES })
  }

  const editPost = async (post) => {
    dispatch({ type: POST_EDIT_START })
    try {
      const { data } = await authFetch.patch(`posts/${state.post.id}`, post)
      dispatch({ type: POST_EDIT_SUCCESS, payload: data })
    } catch (error) {
      dispatch({
        type: POST_EDIT_ERROR,
        payload: { msg: error.response.data.msg }
      })
    }
    clearAlert()
  }

  const editComment = async (comment) => {
    dispatch({ type: EDIT_COMMENT_BEGIN })
    try {
      const url = `comments/${state.commentId}`
      await authFetch.patch(url, comment)
      dispatch({ type: EDIT_COMMENT_SUCCESS })
      clearAlert()
      return { ok: true }
    } catch (error) {
      dispatch({
        type: EDIT_COMMENT_ERROR,
        payload: { msg: error.response.data.msg }
      })
      console.log(error.response);
      clearAlert()
      return { ok: false }
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        generateAlert,
        loginRegister,
        logout,
        getPosts,
        changePage,
        getPost,
        createComment,
        getPostComments,
        deleteComment,
        createPost,
        deletePost,
        handleChange,
        clearValues,
        setIsEditing,
        editPost,
        setIsCommentEditing,
        editComment
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export {
  AppProvider,
  initialState,
  useAppContext
};