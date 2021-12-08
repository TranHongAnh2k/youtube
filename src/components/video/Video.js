import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'
import { AiFillEye, AiOutlineMore } from 'react-icons/ai'
import request from '../../api'

import './_video.scss'

const Video = ({ video }) => {
    const { id, snippet: {
                channelId,
                channelTitle,
                title, 
                publishedAt, 
                thumbnails: { medium } 
                },
             } = video

    const [view,setView] = useState(null)
    const [duration,setDuration] = useState(null)
    const [channelIcon,setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds*1000).format(seconds<3600?"m:ss":"H:mm:ss")

    const _videoId = id?.videoId||id
    


    useEffect(() => {
        
        const get_video_detail  = async()=>{
            const {data:{items}} = await request('/videos',{
                params:{
                    part:'contentDetails,statistics',
                    id:_videoId,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setView(items[0].statistics.viewCount)
          
        }
        get_video_detail()
    }, [_videoId])

    useEffect(() => {
        
        const get_video_icon  = async()=>{
            const {data:{items}} = await request('/channels',{
                params:{
                    part:'snippet',
                    id:channelId,
                }
            })
          
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_video_icon()
    }, [channelId])

    const navigate = useNavigate();


    const handleVideoClick=()=>{
        navigate(`watch/${_videoId}`)
    }    

    return (
        <div className="video" onClick={handleVideoClick}>
            <div className="video__top">
                <img src={medium.url} alt="" />
                <span>{_duration}</span>
            </div>


            <div className="video__content">
                <div className="video__channel">
                    <img src={channelIcon?.url} alt="" />
                </div>

                <div className="video__detail">
                    <div className="video__detail__tittle">
                        {title}
                    </div>

                    <div className="video__detail__channel">
                        {channelTitle}
                    </div>

                    <div className="video__detail__views">
                        <span>
                            <AiFillEye />{numeral(view).format('0.a')} views • {moment(publishedAt).fromNow()}
                        </span>

                    </div>
                </div>

                <div className="video__more">
                    <AiOutlineMore size={28} />
                </div>
            </div>
        </div>
    )
}

export default Video
