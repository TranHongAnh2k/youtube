import request from "../../api"
import { HOME_VIDEOS_FAIL,
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
    } from "../reducers/actionType"

export const getPopularVideos = ()=> async (dispatch,getState)=>{
    try {

        dispatch({
            type:HOME_VIDEOS_REQUEST
        })

        const {data} = await request('/videos',{
            params:{
                part:'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'VN',
                maxResults: 20,
                pageToken: getState().video.nextPageToken,
            }
        })
        
        
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:'All'
            },
        })
        
    } catch (error) {
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload:error.message
        })
        
    }
}

export const getVideosByCategory = (keyword)=> async (dispatch, getState)=>{
    try {

        dispatch({
            type:HOME_VIDEOS_REQUEST
        })

        const {data} = await request('/search',{
            params:{
                part:'snippet',
                regionCode: 'VN',
                maxResults: 20,
                pageToken: getState().video.nextPageToken,
                q:keyword,
                type:'video'
            }
        })
        
    
        dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword
            },
        })
        
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload:error.message
        })
    }
}

export const getVideoById=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type: SELECT_VIDEOS_REQUEST
        })

        const {data} =await request('/videos',{
            params:{
                part:'snippet,contentDetails,statistics',
                id:id,
            }
        })

        dispatch({
            type:SELECT_VIDEOS_SUCCESS,
            payload:data.items[0],
        })

    } catch (error) {
        dispatch({
            type:SELECT_VIDEOS_FAIL,
            payload:error.message
        })
    }
}

export const getRelatedVideo=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type: RELATED_VIDEOS_REQUEST
        })

        const {data} =await request('/search',{
            params:{
                part:'snippet',
                relatedToVideoId:id,
                maxResults:15,
                type:'video'
            }
        })

        dispatch({
            type:RELATED_VIDEOS_SUCCESS,
            payload:data.items,
        })

    } catch (error) {
        dispatch({
            type:RELATED_VIDEOS_FAIL,
            payload:error.message
        })
    }
}

export const searchVideoByQuery=(surfing)=>async (dispatch)=>{
    try {
        dispatch({
            type: SEARCH_VIDEOS_REQUEST
        })

        const {data} =await request('/search',{
            params:{
                part:'snippet',
                q:surfing,
                maxResults:15,
                type:'video'
            }
        })

        dispatch({
            type:SEARCH_VIDEOS_SUCCESS,
            payload:data.items,
        })

    } catch (error) {
        dispatch({
            type:SEARCH_VIDEOS_FAIL,
            payload:error.message
        })
    }
}