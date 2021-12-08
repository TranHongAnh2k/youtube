import React, { useEffect } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from "react-show-more-text";


import './_VideoMetaData.scss'
import { useDispatch } from 'react-redux';
import { checkSubscriptionStatus, getChannelById } from '../../redux/actions/channel.action';
import { useSelector } from 'react-redux';

const VideoMetaData = ({video}) => {

    const {channelId,title,description,channelTitle,publishedAt } = video?.snippet
    const {viewCount, likeCount,dislikeCount} = video?.statistics

    const dispatch = useDispatch()
    const {
        channel:{
            snippet: channelSnippet,
            statistics
        }
     } = useSelector(state => state.channelDetails)


    useEffect(()=>{
        dispatch(getChannelById(channelId))
        dispatch(checkSubscriptionStatus(channelId))
    },[channelId,dispatch])

    return (
        <div className="videoMetaData">
            <div className="videoMetaData__top">
                <h5>{title}</h5>

                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(viewCount).format('0.a')} views • {moment(publishedAt).fromNow()}
                    </span>

                    <div >
                        <span className='me-3'>
                            <MdThumbUp size={26} className='me-1' />{numeral(likeCount).format('0.a')}
                        </span>
                        
                        <span className='me-3'>
                            <MdThumbDown size={26} className='me-1' />{numeral(dislikeCount).format('0.a')}
                        </span>
                    </div>
                </div>
            </div>

            <div className="videoMetaData__channel">
                <img  src={channelSnippet?.thumbnails?.default?.url} alt="" />

                <div className="videoMetaData__details">
                    <div className="videoMetaData__admin">
                        <div className="videoMetaData__admin__channel">
                            <span>{channelTitle}</span>
                            <span>
                                {numeral(statistics?.subscriberCount).format('0.a')} Subcribers
                            </span>
                        </div>
                        <button>SUBCRIBE</button>
                    </div>

                    <div className="videoMetaData__description">
                        <ShowMoreText
                            /* Default options */
                            lines={2}
                            more="Show more"
                            less="Show less"
                            anchorClass="showMoreText"
                            expanded={false}
                            width={280}
                            truncatedEndingComponent={"... "}
                        >
                            {description}
                        </ShowMoreText>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoMetaData
