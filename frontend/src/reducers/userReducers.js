import {USER_REGISTER_FAIL,USER_REGISTER_REQUEST,USER_REGISTER_SUCCESS}from "../constants/userConstants";


export const courseUserRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, success:true };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
