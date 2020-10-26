import React, { useState } from 'react'
import {
    GlobalStyle,
    Form,
    Input,
    TextArea,
    Button,
    Legend,
    Banner,
    CommentList,
} from 'components'
import useComponentDidUpdate from 'hooks/useComponentUpdate'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import {
    getCommentsFromLocalStorage,
    saveCommentsToLocalStorage,
    getParentButton,
} from 'utils/lib'

function App() {
    const [formData, setFormData] = useState({
        name: '',
        comment: '',
        disabled: true,
    })

    const [comments, setComments] = useState(getCommentsFromLocalStorage())

    const [isAscendingSorted, setIsAscendingSorted] = useState(true)

    // persisting comments to localstorage when comments[] updates
    useComponentDidUpdate(() => {
        saveCommentsToLocalStorage(comments)
    }, [comments])

    function handleToggleSorting() {
        setIsAscendingSorted(!isAscendingSorted)
    }

    // handler for adding comment
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
        value = value.trimStart()

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
        let target = getParentButton(event)

        // DOM attributes are strings
        const commentId = Number(target.dataset['commentid'])

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
        let target = getParentButton(event)

        const dataset = target.dataset
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

    // settings commentsToShow based on "sort" order selected
    const commentsToShow = isAscendingSorted
        ? comments
        : comments.slice().reverse()

    return (
        <>
            <GlobalStyle />

            {/* "ADD COMMENT" form */}
            <Form onSubmit={handleSubmit}>
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
            </Form>

            <Banner>
                <span>Sort By: Date and Time</span>
                {isAscendingSorted ? (
                    <BsArrowDown onClick={handleToggleSorting} />
                ) : (
                    <BsArrowUp onClick={handleToggleSorting} />
                )}
            </Banner>

            <CommentList
                comments={commentsToShow}
                handleAddReply={handleAddReply}
                handleEditReply={handleEditReply}
                handleDeleteReply={handleDeleteReply}
                handleEditComment={handleEditComment}
                handleDeleteComment={handleDeleteComment}
                isAscendingSorted={isAscendingSorted}
            />
        </>
    )
}

export { App }
