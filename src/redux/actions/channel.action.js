import request from "../../api"
import { 
        CHANNEL_DETAILS_SUCCESS,
        CHANNEL_DETAILS_REQUEST,
        CHANNEL_DETAILS_FAIL,
        SET_SUBSCRIPTION_STATUS
    } from "../reducers/actionType"



export const getChannelById=(id)=>async (dispatch)=>{
    try {
        dispatch({
            type: CHANNEL_DETAILS_REQUEST
        })

        const {data} =await request('/channels',{
            params:{
                part:'snippet,contentDetails,statistics',
                id
            }
        })
        // console.log(data);
        dispatch({
            type:CHANNEL_DETAILS_SUCCESS,
            payload:data.items[0],
        })

    } catch (error) {
        dispatch({
            type:CHANNEL_DETAILS_FAIL,
            payload:error.message
        })
    }
}

export const checkSubscriptionStatus = id => async (dispatch, getState) => {
    try {
       const { data } = await request('/subscriptions', {
          params: {
             part: 'snippet',
             forChannelId: id,
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })

       dispatch({
          type: SET_SUBSCRIPTION_STATUS,
          payload: data.items.length !== 0,
       })
     
    } catch (error) {
    //    console.log(error.response.data)
    }
 }