import moment from 'moment'
import React from 'react'
import ShowMoreText from "react-show-more-text";

import './_comment.scss'

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="" />

            <div className="comment__body">
                <p className="comment__header">
                    {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName} • {moment(comment?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}
                </p>

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
                    {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
                </ShowMoreText>

            </div>

        </div>
    )
}

export default Comment
