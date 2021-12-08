import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, getCommentByVideo } from '../../redux/actions/comment.action'
import Comment from '../comment/Comment'

import './_comments.scss'

const Comments = ({ id }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCommentByVideo(id))
    }, [dispatch, id])

    const { comments,loading } = useSelector(state => state.comments)
 

    const {selectVideo} = useSelector(state=>state)

    const {photo,name} = useSelector(state=>state.auth.user)

    const [text,setText] = useState('')

    const handleComment = (e) => {
        e.preventDefault()
        if (text.length===0)return
        dispatch(addComment(id,text))
        setText('')
     }


    return (
        <div className="comments">
            <p>{!selectVideo.loading&&selectVideo.video.statistics.commentCount} comments</p>
            <div className="comments__form ">
                <img src={photo?photo:"./images/user.png"} alt ={name}/>
                <form onSubmit={handleComment}
                    className="d-flex flex-grow-1"
                >
                    <input
                        type="text"
                        className="flex-grow-1"
                        placeholder="Write a comment..."
                        value={text}
                        onChange={e=>setText(e.target.value)}
                    />

                    <button className='border-0 p-2'>Comment</button>

                </form>


            </div>

            <div className="comments__list">
                {
                    !loading&&comments?.map((comment, index) => (
                        <Comment comment={comment} key={index} />
                    ))
                }
            </div>

            <span className="comments_line"></span>
        </div>
    )
}

export default Comments
