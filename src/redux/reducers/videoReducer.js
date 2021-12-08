import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SELECT_VIDEOS_FAIL,
    SELECT_VIDEOS_REQUEST,
    SELECT_VIDEOS_SUCCESS,
    RELATED_VIDEOS_REQUEST,
    RELATED_VIDEOS_SUCCESS,
    RELATED_VIDEOS_FAIL,
    SEARCH_VIDEOS_REQUEST,
    SEARCH_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL
} from "./actionType";

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}

export const videoReducer = (preState = initialState, action) => {
    const { type, payload } = action

    switch (type) {

        case HOME_VIDEOS_REQUEST:
            return {
                ...preState,
                loading: true
            }

        case HOME_VIDEOS_FAIL:
            return {
                ...preState,
                loading: false,
                error: payload
            }

        case HOME_VIDEOS_SUCCESS:
            return {
                ...preState,
                loading: false,
                videos:
                    preState.activeCategory === payload.category ?
                        [...preState.videos, ...payload.videos]
                        : payload.videos
                ,
                nextPageToken: payload.nextPageToken,
                activeCategory: payload.category
            }

        default:
            return preState;
    }
}

export const selectVideoReducer = (
    state = {
        loading: true,
        video: null
    },
    action
) => {
    const {payload,type}=action

    switch(type){

        case SELECT_VIDEOS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case SELECT_VIDEOS_SUCCESS:
            return{
                ...state,
                loading:false,
                video:payload
            }

        case SELECT_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }

        default:
            return state;
    }
}

export const relatedVideoReducer = (
    state = {
        loading: true,
        videos: []
    },
    action
) => {
    const {payload,type}=action

    switch(type){

        case RELATED_VIDEOS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case RELATED_VIDEOS_SUCCESS:
            return{
                ...state,
                loading:false,
                videos:payload
            }

        case RELATED_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }

        default:
            return state;
    }
}

export const searchVideoReducer = (
    state = {
        loading: true,
        videos: []
    },
    action
) => {
    const {payload,type}=action

    switch(type){

        case SEARCH_VIDEOS_REQUEST:
            return{
                ...state,
                loading:true
            }

        case SEARCH_VIDEOS_SUCCESS:
            return{
                ...state,
                loading:false,
                videos:payload
            }

        case SEARCH_VIDEOS_FAIL:
            return{
                ...state,
                loading:false,
                error:payload
            }

        default:
            return state;
    }
}


