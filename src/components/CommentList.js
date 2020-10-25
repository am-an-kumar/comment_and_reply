import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

function CommentList({
    comments,
    handleAddReply,
    handleDeleteComment,
    handleDeleteReply,
}) {
    return (
        comments.length !== 0 && (
            <ul>
                {comments.map(function mapComments(comment) {
                    return (
                        <Comment
                            key={comment.id}
                            {...comment}
                            handleDeleteComment={handleDeleteComment}
                            handleAddReply={handleAddReply}
                            handleDeleteReply={handleDeleteReply}
                        />
                    )
                })}
            </ul>
        )
    )
}

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    handleAddReply: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
}

export default CommentList
