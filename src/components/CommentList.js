import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

function CommentList({
    comments,
    handleAddReply,
    handleEditReply,
    handleDeleteReply,
    handleEditComment,
    handleDeleteComment,
}) {
    return (
        comments.length !== 0 && (
            <ul>
                {comments.map(function mapComments(comment) {
                    return (
                        <Comment
                            key={comment.id}
                            {...comment}
                            handleAddReply={handleAddReply}
                            handleEditReply={handleEditReply}
                            handleDeleteReply={handleDeleteReply}
                            handleEditComment={handleEditComment}
                            handleDeleteComment={handleDeleteComment}
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
    handleEditReply: PropTypes.func.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
    handleEditComment: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
}

export default CommentList
