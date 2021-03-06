import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Comment, List } from 'components'

const CommentList = memo(function CommentList({
    comments,
    handleAddReply,
    handleEditReply,
    handleDeleteReply,
    handleEditComment,
    handleDeleteComment,
    isAscendingSorted,
    openFormId,
    setOpenFormId,
}) {
    return (
        comments.length !== 0 && (
            <List>
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
                            isAscendingSorted={isAscendingSorted}
                            openFormId={openFormId}
                            setOpenFormId={setOpenFormId}
                        />
                    )
                })}
            </List>
        )
    )
})

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    handleAddReply: PropTypes.func.isRequired,
    handleEditReply: PropTypes.func.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
    handleEditComment: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
    isAscendingSorted: PropTypes.bool.isRequired,
    openFormId: PropTypes.number.isRequired,
    setOpenFormId: PropTypes.func.isRequired,
}

export { CommentList }
