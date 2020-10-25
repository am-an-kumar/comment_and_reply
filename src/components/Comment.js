import React, { useState } from 'react'
import PropTypes from 'prop-types'
import StyledForm from './StyledForm'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import Legend from './Legend'
import Info from './Info'
import Reply from './Reply'

function Comment({
    name,
    text,
    id,
    date,
    replies,
    handleAddReply,
    handleEditReply,
    handleDeleteReply,
    handleDeleteComment,
}) {
    const [showReplyForm, setShowReplyForm] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        reply: '',
        disabled: true,
    })

    function handleSubmit(event) {
        event.preventDefault()
        const { name, reply } = formData

        handleAddReply(id, name, reply)
        setFormData({
            name: '',
            reply: '',
            disabled: true,
        })
    }

    function handleChange(event) {
        let { name, value } = event.target
        value = value.trim()

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

    return (
        <li>
            {showEditForm ? (
                <p>What the hell</p>
            ) : (
                <Info
                    name={name}
                    text={text}
                    commentId={id}
                    date={date}
                    showReplyButton={true}
                    toggleReply={toggleReply}
                    handleDelete={handleDeleteComment}
                />
            )}

            {showReplyForm && (
                <StyledForm onSubmit={handleSubmit}>
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
                <ul>
                    {replies.map(function mapReply(reply) {
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
                </ul>
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
    handleDeleteComment: PropTypes.func.isRequired,
}

export default Comment
