import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// comments will just have the commentId while replies will have both commentId and replyId
function Info({
    showReplyButton,
    toggleReply,
    handleDelete,
    handleEdit,
    name,
    text,
    date,
    commentId,
    replyId,
}) {
    return (
        <div>
            <p>{name}</p>
            <p>{text}</p>
            <p>{date}</p>
            <div>
                {showReplyButton && (
                    <Button
                        data-commentid={commentId}
                        data-replyid={replyId}
                        onClick={toggleReply}
                    >
                        Reply
                    </Button>
                )}
                <Button
                    data-commentid={commentId}
                    data-replyid={replyId}
                    onClick={handleEdit}
                >
                    Edit
                </Button>
                <Button
                    data-commentid={commentId}
                    data-replyid={replyId}
                    onClick={handleDelete}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

Info.defaultProps = {
    commentId: -1,
    replyId: -1,
}

Info.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    commentId: PropTypes.number.isRequired,
    replyId: PropTypes.number,
    date: PropTypes.number.isRequired,
    showReplyButton: PropTypes.bool,
    toggleReply: PropTypes.func,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
}

export default Info
