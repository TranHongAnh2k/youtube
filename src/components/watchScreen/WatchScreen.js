import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading';
import { getRelatedVideo, getVideoById } from '../../redux/actions/video.action'
import Comments from '../comments/Comments'
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'
import VideoMetaData from '../videoMetaData/VideoMetaData'
import './_WatchScreen.scss'

const WatchScreen = () => {

    const { id } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideoById(id))

        dispatch(getRelatedVideo(id))
    }, [dispatch, id])


    const { video, loading } = useSelector(state => state.selectVideo)
    const { videos } = useSelector(state => state.relatedVideo)

    return (
        <Row className="mt-4 me-3">
            <Col lg={8} >
                <div className="watchScreen__player ">
                    <iframe
                        width="100%"
                        height="100%"
                        title='My video'
                        frameBorder='0'
                        allowFullScreen
                        src={`https://www.youtube.com/embed/${id}`}

                    >
                    </iframe>
                </div>
                {!loading ? (
                    <VideoMetaData video={video} />) :
                    <ReactLoading type='spin' color="#fff" height={100} width={100} />
                
                }
                <Comments id={id} />
            </Col>
            <Col lg={4}>
                {
                    videos?.map((video, index) => video.snippet && <VideoHorizontal video={video} key={index} />)
                }
            </Col>

            {/* <Comments id={id} /> */}
        </Row>
    )
}

export default WatchScreen
