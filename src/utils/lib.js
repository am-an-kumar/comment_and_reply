const localStorageKey = 'comments'

function getCommentsFromLocalStorage() {
    const commentsJSON = localStorage.getItem(localStorageKey)

    if (commentsJSON) {
        const comments = JSON.parse(commentsJSON)
        return comments
    } else {
        return []
    }
}

function saveCommentsToLocalStorage(comments) {
    const commentsJSON = JSON.stringify(comments)
    localStorage.setItem(localStorageKey, commentsJSON)
}

function getFormattedDate(dateMs) {}

export {
    getCommentsFromLocalStorage,
    saveCommentsToLocalStorage,
    getFormattedDate,
}
