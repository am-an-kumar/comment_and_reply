const localStorageKey = 'comments'

// dummy data to show when a user is using the app for the first time
const dummyData = [
    {
        date: 1603693344107,
        id: 1603693344107,
        name: 'First dummy user',
        text: 'Dummy comment',
        replies: [
            {
                date: 1603693363681,
                id: 1603693363681,
                name: 'Second dummy user',
                text: 'Dummy reply',
            },
        ],
    },
]

function getCommentsFromLocalStorage() {
    const commentsJSON = localStorage.getItem(localStorageKey)
    if (commentsJSON) {
        const comments = JSON.parse(commentsJSON)
        return comments
    } else {
        return dummyData
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

// dateMs - number of milliseconds passed since EPOCH's time
// formats dateMs and returns a custom Date String of the form `DD Mon YYYY`
function getFormattedDate(dateMs) {
    const date = new Date(dateMs)

    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${day} ${getMonthName(monthIndex)} ${year}`
}

function getParentButton(event) {
    switch (event.target.tagName.toUpperCase()) {
        case 'PATH':
            return event.target.parentElement.parentElement
        case 'SVG':
            return event.target.parentElement
        case 'BUTTON':
        default:
            return event.target
    }
}

export {
    getCommentsFromLocalStorage,
    saveCommentsToLocalStorage,
    getFormattedDate,
    getParentButton,
}
