import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { channelDetailsReducer } from "./channelReducer";
import { commentsReducer } from "./commentReducer";
import { relatedVideoReducer, searchVideoReducer, selectVideoReducer, videoReducer } from "./videoReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    video:videoReducer,
    selectVideo:selectVideoReducer,
    channelDetails:channelDetailsReducer,
    comments:commentsReducer,
    relatedVideo: relatedVideoReducer,
    searchVideo:searchVideoReducer
})

export default rootReducer;