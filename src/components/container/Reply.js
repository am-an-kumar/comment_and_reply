import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Legend, Input, TextArea, Button, StyledInfo } from 'components'

function Reply({
    id,
    commentId,
    replyId,
    name,
    text,
    date,
    handleDeleteReply,
    handleEditReply,
    openFormId,
    setOpenFormId,
}) {
    const [newReply, setNewReply] = useState(text)
    const [showEditForm, setShowEditForm] = useState(false)

    // edit reply handler
    function handleEdit(event) {
        event.preventDefault()
        handleEditReply(commentId, replyId, newReply)
        setShowEditForm(false)
    }

    return showEditForm && id === openFormId ? (
        //"EDIT REPLY" form
        <Form onSubmit={handleEdit}>
            <Legend>Edit Reply</Legend>
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
            <Button type="submit" disabled={!newReply}>
                Post
            </Button>
        </Form>
    ) : (
        // "REPLY" card
        <StyledInfo
            commentId={commentId}
            replyId={replyId}
            name={name}
            text={text}
            date={date}
            handleDelete={handleDeleteReply}
            handleEdit={() => {
                setShowEditForm(true)
                setOpenFormId(id)
            }}
        />
    )
}

Reply.proTypes = {
    id: PropTypes.number.isRequired,
    commentId: PropTypes.number.isRequired,
    replyId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
    openFormId: PropTypes.number.isRequired,
    setOpenFormId: PropTypes.func.isRequired,
}

export { Reply }
