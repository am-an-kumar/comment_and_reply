import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/presentational/styled'
import { getFormattedDate } from 'utils/lib'

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
    className,
}) {
    return (
        <div className={className}>
            <div className="meta">
                <span className="name">{name}</span>
                <span className="date">{getFormattedDate(date)}</span>
                {}
            </div>
            <p className="text">{text}</p>
            <div className="buttons">
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
    className: PropTypes.string,
}

export { Info }
