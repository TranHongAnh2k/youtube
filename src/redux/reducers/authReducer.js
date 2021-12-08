import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "./actionType";

const initialState={
    accessToken:localStorage.getItem('ytc-access-token')?localStorage.getItem('ytc-access-token'):null,
    user:localStorage.getItem('ytc-user')?JSON.parse(localStorage.getItem('ytc-user')):{},
    loading:false,
}

const authReducer = (preState=initialState,action)=>{
    const {type,payload}= action;

    switch(type){

        case LOGIN_REQUEST:
            return{
                ...preState,
                loading:true
            }

        case LOGIN_SUCCESS:
            return{
                ...preState,
                accessToken:payload,
                loading:false
            }

        case LOGIN_FAIL:
            return{
                ...preState,
                accessToken:null,
                loading:false,
                error:payload
            }

        case LOAD_PROFILE:
            return {
                ...preState,
                user:payload
            }

        case LOG_OUT:
            return{
                ...preState,
                accessToken:null,
                user:{},
            }
        default:
            return preState
    }
}

export default authReducer;