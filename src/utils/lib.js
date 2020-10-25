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

function getMonthName(monthIndex) {
    switch (monthIndex) {
        case 0:
            return 'Jan'
        case 1:
            return 'Feb'
        case 2:
            return 'Mar'
        case 3:
            return 'Apr'
        case 4:
            return 'May'
        case 5:
            return 'Jun'
        case 6:
            return 'Jul'
        case 7:
            return 'Aug'
        case 8:
            return 'Sep'
        case 9:
            return 'Oct'
        case 10:
            return 'Nov'
        case 11:
            return 'Dec'
        default:
            return ''
    }
}

function getFormattedDate(dateMs) {
    const date = new Date(dateMs)

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${day} ${getMonthName(monthIndex)} ${year}`
}

export {
    getCommentsFromLocalStorage,
    saveCommentsToLocalStorage,
    getFormattedDate,
}
