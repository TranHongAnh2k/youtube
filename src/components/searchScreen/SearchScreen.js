import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactLoading from 'react-loading'
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'
import {searchVideoByQuery } from '../../redux/actions/video.action'

const SearchScreen = () => {
    const dispatch = useDispatch()
    const {videos,loading} = useSelector(state=>state.searchVideo)
    const {query} = useParams()

    useEffect(()=>{
        dispatch(searchVideoByQuery(query))
    },[dispatch,query])
    return (
        <Container>
            {
                !loading?(
                    videos?.map(video=><VideoHorizontal video={video} key = {video?.id?.videoId} isVideo={true} />)
                ):
                <ReactLoading  type='spin' color="#fff" height={100} width={100} />
            }
        </Container>
        
    )
}

export default SearchScreen
