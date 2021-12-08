import { COMMENT_VIDEO_FAIL, COMMENT_VIDEO_REQUEST, COMMENT_VIDEO_SUCCESS } from "./actionType";

const initialState={
    loading:true,
    comments:null
}

export const commentsReducer=(state=initialState,action)=>{
    const {type,payload} = action

    switch (type) {
        case COMMENT_VIDEO_REQUEST:
            return{
                ...state,
                loading:true
            }
        
        case COMMENT_VIDEO_SUCCESS:
            return{
                ...state,
                loading:false,
                comments:payload
            }

        case COMMENT_VIDEO_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }
    
        default:
            return state;
    }
}