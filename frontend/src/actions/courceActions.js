import {
  COURCE_LIST_REQUEST,
  COURCE_LIST_FAIL,
  COURCE_LIST_SUCCESS,
  COURCE_CREATE_REQUEST,
  COURCE_CREATE_SUCCESS,
  COURCE_CREATE_FAIL,
} from "../constants/courceConstants";
import axios from "axios";

export const listCource = ()=> async (dispatch , getState) => {
    try{
        dispatch({
            type: COURCE_LIST_REQUEST,
        });

        const {
            userLogin : {courceInfo},
             } = getState();
        
        const { data } = await axios.get(`/api/cources`);
            dispatch({
              type: COURCE_LIST_SUCCESS,
               payload: data,
    });
  } catch (error) {
        const message =
            error.response && error.response.data.message? 
            error.response.data.message: error.message;
        dispatch({
            type: COURCE_LIST_FAIL,
            payload: message,
    });
  }
};

export const createCourceAction = 
(title , Description) => async (dispatch, getState)=> {
    console.log('action')
    try {
        dispatch({
            type: COURCE_CREATE_REQUEST,
        })
        // const {
        //     userLogin: {userInfo},
        // } = getState();
        
    
    const { data } = await axios.post(`/api/cource/create`, {
      title,
      Description,
    });

    dispatch ({
        type: COURCE_CREATE_SUCCESS,
        payload:data,
    });

    }catch(error) {
        const message = 
         error.response && error.response.data.message? 
            error.response.data.message: error.message;

        dispatch({
            type:COURCE_CREATE_FAIL,
            payload:message,
        });
    }

};




