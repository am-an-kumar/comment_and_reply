import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyledForm, Legend, Input, TextArea, Button, Info } from 'components'

function Reply({
    commentId,
    replyId,
    name,
    text,
    date,
    handleDeleteReply,
    handleEditReply,
}) {
    const [newReply, setNewReply] = useState(text)
    const [showEditForm, setShowEditForm] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        handleEditReply(commentId, replyId, newReply)
        setShowEditForm(false)
    }

    return showEditForm ? (
        <StyledForm onSubmit={handleSubmit}>
            <Legend>Reply</Legend>
            <Input
                name="name"
                placeholder="Name"
                value={name}
                readOnly={true}
            />
            <TextArea
                name="reply"
                placeholder="Reply"
                value={newReply}
                onChange={(event) => setNewReply(event.target.value)}
            />
            <Button type="submit">Post</Button>
        </StyledForm>
    ) : (
        <Info
            commentId={commentId}
            replyId={replyId}
            name={name}
            text={text}
            date={date}
            handleDelete={handleDeleteReply}
            handleEdit={() => setShowEditForm(true)}
        />
    )
}

Reply.proTypes = {
    commentId: PropTypes.number.isRequired,
    replyId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
}

export { Reply }
