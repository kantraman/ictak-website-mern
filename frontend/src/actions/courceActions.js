import {
  COURCE_LIST_REQUEST,
  COURCE_LIST_FAIL,
  COURCE_LIST_SUCCESS,
  COURCE_CREATE_REQUEST,
  COURCE_CREATE_SUCCESS,
  COURCE_CREATE_FAIL,
  COURCE_UPDATE_REQUEST,
  COURCE_UPDATE_SUCCESS,
  COURCE_UPDATE_FAIL,
  COURCE_DELETE_REQUEST,
  COURCE_DELETE_SUCCESS,
  COURCE_DELETE_FAIL,
} from "../constants/courceConstants";
import axios from "axios";

export const listCource = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURCE_LIST_REQUEST,
    });

    // const {
    //     userLogin : {courceInfo},
    //      } = getState();

    const { data } = await axios.get(`/api/cource`);
    dispatch({
      type: COURCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURCE_LIST_FAIL,
      payload: message,
    });
  }
};

export const createCourceAction =
  (title, Description) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURCE_CREATE_REQUEST,
      });
      // const {
      //     userLogin: {userInfo},
      // } = getState();

      const { data } = await axios.post(`/api/cource/create`, {
        title,
        Description,
      });

      dispatch({
        type: COURCE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: COURCE_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const updateCourceAction =
  (id, title, Description) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURCE_UPDATE_REQUEST,
      });
      const { data } = await axios.put(`/api/cource/${id}`, {
        title,
        Description,
      });

      dispatch({
        type: COURCE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      dispatch({
        type: COURCE_UPDATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteCourceAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COURCE_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/api/cource/${id}`);

    dispatch({
      type: COURCE_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: COURCE_DELETE_FAIL,
      payload: message,
    });
  }
};
