import React, { useEffect, useState } from 'react'
import moment from 'moment'
import numeral from 'numeral'
import { Col, Row } from 'react-bootstrap'

import './_videoHorizone.scss'
import { AiFillEye } from 'react-icons/ai'

import request from '../../api'
import { useNavigate } from 'react-router'

const VideoHorizontal = ({ video,isVideo }) => {

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const navigate = useNavigate()

    
    useEffect(() => {
        const get_video_details = async () => {
            const { data: { items } } = await request('/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    id: video.id.videoId,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        get_video_details()

    }, [video.id.videoId])

    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format(seconds < 3600 ? "m:ss" : "H:mm:ss")

    const handelHorizontal = ()=>{
        navigate(`/watch/${video.id.videoId}`)
    }


    return (
        <Row className='videoHorizontal' onClick={handelHorizontal}>
            <Col md={isVideo?4:6} className="videoHorizontal__left">
                <img src={video?.snippet?.thumbnails?.high?.url} alt="" />
                <span className="videoHorizontal__duration">{_duration}</span>
            </Col>

            <Col  md={isVideo?4:6} className="videoHorizontal__right d-flex flex-column">
                <p className="videoHorizontal__title">
                    {video?.snippet?.title}
                </p>

                <div className="videoHorizontal__detail">
                    <AiFillEye />{numeral(views).format('0.a')} views • {moment(video?.snippet?.publishedAt).fromNow()}
                </div>

                <div className="videoHorizontal__channel">
                    {video?.snippet?.channelTitle}
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
