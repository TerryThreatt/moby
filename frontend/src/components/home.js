const BACKEND_URL = 'http://localhost:3000/api/v1';
const ALLDISCUSSIONS_URL = `${BACKEND_URL}/discussions`
const ALLCOMMENTS_URL = `${BACKEND_URL}/discussions`

const renderHomepage = () => {
    // elements
    const container = document.createElement('container');
    const main = document.getElementsByTagName('main');

    main.appendChild(container)
}

const getDiscussions = () => {
    return fetch(ALLDISCUSSIONS_URL)
        .then(response => response.json())
        .then(discussions => {
            discussions.forEach((discussion) => {
                renderDiscussion(discussion)
                })
            })
}

const renderDiscussion = (discussion) => {
    // create elements
    const div = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    const ul = document.createElement('ul')

    // update element attributes
    div.setAttribute("class", "card")
    div.setAttribute("data-id", discussion.id)
    p.innerHTML = discussion.title
    button.setAttribute("data-discussion-id", discussion.id)
    button.innerText = "Add Comment"

    // append
    div.appendChild(p)
    div.appendChild(button)
    div.appendChild(ul)
    main.appendChild(div)

    discussion.comments.forEach(comment => renderComment(comment))

    // event - add comment
    button.addEventListener('click', createComment)
}

const renderComment = (comment) => {
    // create elements
    const ul = document.querySelector(`div[data-id="${comment.discussion_id}"]`)
    const li = document.createElement('li')
    const button = document.createElement('button')

    // set element attributes
    li.innerHTML = `${comment.body}`
    button.setAttribute('class', 'submit')
    button.setAttribute('data-comment-id', comment.id)
    button.innerText = 'Submit'

    // append
    li.appendChild(button)
    ul.appendChild(li)

    // event - add new comment
    button.addEventListener('click', createComment)
}

const createComment = (e) => {
    e.preventDefault()

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({discussion_id: e.target.dataset.discussionId})
    }

    fetch(ALLCOMMENTS_URL, configObj)
        .then(response => response.json())
        .then(comment => {
            if (comment.message) {
                alert(comment.message)
            } else {
            renderComment(comment)
        }
    })
}
