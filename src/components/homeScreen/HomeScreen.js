import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-loading-skeleton/dist/skeleton.css'

import { getPopularVideos, getVideosByCategory } from '../../redux/actions/video.action'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import Video from '../video/Video'
import './_homeScreen.scss'
import SkeletonVideo from '../skeletonVideo/SkeletonVideo';



const HomeScreen = () => {

    const dispatch = useDispatch();
    const { videos,activeCategory,loading } = useSelector(state => state.video)

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch]);


    const fetchData = () => {
        activeCategory==="All"?dispatch(getPopularVideos()):dispatch(getVideosByCategory(activeCategory));

    }


    return (
        <Container className="homeScreen">
            <CategoriesBar />
            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className='spinner-border text-danger d-block mx-auto'/>
                }
            >
                <Row>
                    {!loading?videos.map((video) => (
                        <Col sm={6} lg={3} md={4} key={video.id?.videoId || video.id} >
                            <Video video={video} />
                        </Col>
                    )):[...Array(20)].map((val)=>(
                        <Col sm={6} lg={3} md={4}>
                            <SkeletonVideo height={180} width="100%" key ={val} />
                        </Col>
                    ))}
                </Row>
            </InfiniteScroll>

        </Container >
    )
}

export default HomeScreen
