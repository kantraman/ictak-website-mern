import { COURCE_CREATE_FAIL, COURCE_CREATE_REQUEST, COURCE_CREATE_SUCCESS,
     COURCE_DELETE_FAIL,
     COURCE_DELETE_REQUEST,
     COURCE_DELETE_SUCCESS,
     COURCE_LIST_FAIL, COURCE_LIST_REQUEST, COURCE_LIST_SUCCESS, COURCE_UPDATE_FAIL, COURCE_UPDATE_REQUEST, COURCE_UPDATE_SUCCESS } from "../constants/courceConstants";
     
export const courceListReducers = (state = {cource:[]},action) =>{
    switch (action.type){
        case COURCE_LIST_REQUEST :
            return{ loading: true};
        case COURCE_LIST_SUCCESS :
            return{ loading: false , cource: action.payload};
        case COURCE_LIST_FAIL :
            return{ loading: false , error: action.payload};
            
            default:
                return state;
            
    }
};

export const courceCreateReducer = (state = {}, action) =>
{
    switch (action.type){
        case COURCE_CREATE_REQUEST:
            return { loading: true};
        case COURCE_CREATE_SUCCESS :
            return { loading : false, success : true};
        case COURCE_CREATE_FAIL :
            return {loading:false , error : action.payload};

         default:
             return state;   

    }
};

export const courceUpdateReducer = (state = {}, action) =>
{
    switch (action.type){
        case COURCE_UPDATE_REQUEST:
           return {loading :true};
        case COURCE_UPDATE_SUCCESS:
            return {loading : false , success : true };
        case COURCE_UPDATE_FAIL:
            return {loading : false , error:action.payload,  success:false};

    
        default:
            return state;

    }
};

export const courceDeleteReducer = (state = {}, action) =>
{
    switch (action.type) {
        case COURCE_DELETE_REQUEST :
            return { loading : true};
        case COURCE_DELETE_SUCCESS :
            return {loading : false , success : true};
        case COURCE_DELETE_FAIL :
            return {loading : false , error: action.payload , success : false };
            
        default:
            return state;
    }
};

