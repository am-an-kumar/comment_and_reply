import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle'
import StyledForm from './StyledForm'
import CommentList from './CommentList'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import Legend from './Legend'
import useComponentDidUpdate from 'hooks/useComponentUpdate'
import {
    getCommentsFromLocalStorage,
    saveCommentsToLocalStorage,
} from 'utils/lib'

function App() {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
        disabled: true,
    })

    const [comments, setComments] = useState(getCommentsFromLocalStorage())

    useComponentDidUpdate(() => {
        saveCommentsToLocalStorage(comments)
        console.log('Effect ran!!!')
    }, [comments])

    function handleSubmit(event) {
        event.preventDefault()

        const { name, comment } = formData
        const timeStamp = Date.now()

        setComments([
            ...comments,
            {
                name,
                text: comment,
                id: timeStamp,
                date: timeStamp,
                replies: [],
            },
        ])

        setFormData({
            name: '',
            comment: '',
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
            disabled: !(formDataCopy.name && formDataCopy.comment),
        })
    }

    // edit/delete comments handlers
    function handleEditComment(commentId, newComment) {
        setComments(
            comments.map(function mapComment(comment) {
                return comment.id === commentId
                    ? { ...comment, text: newComment }
                    : comment
            }),
        )
    }

    function handleDeleteComment(event) {
        // DOM attributes are strings
        const commentId = Number(event.target.dataset['commentid'])

        setComments(
            comments.filter(function filterComment(comment) {
                return comment.id !== commentId
            }),
        )
    }

    // add/edit/delete replies handlers
    function handleAddReply(commentId, replierName, replyText) {
        const currentTimestamp = Date.now()

        setComments(
            comments.map(function mapComments(comment) {
                return comment.id === commentId
                    ? {
                          ...comment,
                          replies: [
                              ...comment.replies,
                              {
                                  name: replierName,
                                  text: replyText,
                                  id: currentTimestamp,
                                  date: currentTimestamp,
                              },
                          ],
                      }
                    : comment
            }),
        )
    }

    function handleEditReply(commentId, replyId, newReply) {
        setComments(
            comments.map(function mapComment(comment) {
                return comment.id === commentId
                    ? {
                          ...comment,
                          replies: comment.replies.map(function mapReply(
                              reply,
                          ) {
                              return reply.id === replyId
                                  ? { ...reply, text: newReply }
                                  : reply
                          }),
                      }
                    : comment
            }),
        )
    }

    function handleDeleteReply(event) {
        const dataset = event.target.dataset
        const commentId = Number(dataset['commentid'])
        const replyId = Number(dataset['replyid'])

        setComments(
            comments.map(function mapComment(comment) {
                return comment.id === commentId
                    ? {
                          ...comment,
                          replies: comment.replies.filter(function filterReply(
                              reply,
                          ) {
                              return reply.id !== replyId
                          }),
                      }
                    : comment
            }),
        )
    }

    return (
        <>
            <GlobalStyle />

            <StyledForm onSubmit={handleSubmit}>
                <Legend>Comment</Legend>
                <Input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <TextArea
                    name="comment"
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleChange}
                />
                <Button type="submit" disabled={formData.disabled}>
                    Post
                </Button>
            </StyledForm>

            <p>Sort By: Date and Time</p>

            <CommentList
                comments={comments}
                handleAddReply={handleAddReply}
                handleEditReply={handleEditReply}
                handleDeleteReply={handleDeleteReply}
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
            />
        </>
    )
}

export default App
