import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    StyledForm,
    Input,
    TextArea,
    Button,
    Legend,
    List,
    StyledInfo,
    Reply,
} from 'components'

function Comment({
    name,
    text,
    id,
    date,
    replies,
    handleAddReply,
    handleEditReply,
    handleDeleteReply,
    handleEditComment,
    handleDeleteComment,
    isAscendingSorted,
}) {
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [newComment, setNewComment] = useState(text)

    const [formData, setFormData] = useState({
        name: '',
        reply: '',
        disabled: true,
    })

    function handleAddReplySubmit(event) {
        event.preventDefault()
        const { name, reply } = formData

        handleAddReply(id, name, reply)
        setFormData({
            name: '',
            reply: '',
            disabled: true,
        })
        setShowReplyForm(false)
    }

    function handleEditFormSubmit(event) {
        event.preventDefault()
        handleEditComment(id, newComment)
        setShowEditForm(false)
    }

    function handleChange(event) {
        let { name, value } = event.target
        value = value.trimStart()

        // this is a deep copy as formData has primitive properties only
        const formDataCopy = { ...formData }
        formDataCopy[name] = value

        setFormData({
            ...formData,
            [name]: value,
            disabled: !(formDataCopy.name && formDataCopy.reply),
        })
    }

    function toggleReply() {
        setShowReplyForm(!showReplyForm)
    }

    const repliesToShow = isAscendingSorted
        ? replies
        : replies.slice().reverse()

    return (
        <li>
            {showEditForm ? (
                <StyledForm onSubmit={handleEditFormSubmit}>
                    <Legend>Comment</Legend>
                    <Input
                        name="name"
                        placeholder="Name"
                        value={name}
                        readOnly={true}
                    />
                    <TextArea
                        name="comment"
                        placeholder="Comment"
                        value={newComment}
                        onChange={(event) => setNewComment(event.target.value)}
                    />
                    <Button type="submit">Post</Button>
                </StyledForm>
            ) : (
                <StyledInfo
                    name={name}
                    text={text}
                    commentId={id}
                    date={date}
                    showReplyButton={true}
                    toggleReply={toggleReply}
                    handleEdit={() => setShowEditForm(true)}
                    handleDelete={handleDeleteComment}
                />
            )}

            {showReplyForm && (
                <StyledForm onSubmit={handleAddReplySubmit}>
                    <Legend>Reply</Legend>
                    <Input
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <TextArea
                        name="reply"
                        placeholder="Reply"
                        value={formData.reply}
                        onChange={handleChange}
                    />
                    <Button type="submit" disabled={formData.disabled}>
                        Post
                    </Button>
                </StyledForm>
            )}

            {replies.length !== 0 && (
                <List indented={true}>
                    {repliesToShow.map(function mapReply(reply) {
                        return (
                            <Reply
                                key={reply.id}
                                commentId={id}
                                replyId={reply.id}
                                {...reply}
                                handleDeleteReply={handleDeleteReply}
                                handleEditReply={handleEditReply}
                            />
                        )
                    })}
                </List>
            )}
        </li>
    )
}

Comment.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    replies: PropTypes.array.isRequired,
    handleAddReply: PropTypes.func.isRequired,
    handleEditReply: PropTypes.func.isRequired,
    handleDeleteReply: PropTypes.func.isRequired,
    handleEditComment: PropTypes.func.isRequired,
    handleDeleteComment: PropTypes.func.isRequired,
}

export { Comment }
