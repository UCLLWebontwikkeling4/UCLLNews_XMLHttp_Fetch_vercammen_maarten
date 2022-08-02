window.onload = getNewsItems

let getNewsItemsRequest = new XMLHttpRequest();

function getNewsItems() {
    getNewsItemsRequest.open("GET", "Controller?command=Overview", true)
    getNewsItemsRequest.onreadystatechange = showNewsItems
    getNewsItemsRequest.send()
}

function showNewsItems() {
    if (getNewsItemsRequest.readyState === 4) {
        if (getNewsItemsRequest.status === 200) {
            let newsItems = JSON.parse(getNewsItemsRequest.responseText)
            let newsItemsDiv = document.getElementById("news")
            for (let i = 0; i < newsItems.length; i++) {
                let newsItemHTML = document.getElementById("news-" + newsItems[i].id)
                if (newsItemHTML) {
                    updateNewsItem(newsItems[i], newsItemHTML)
                } else {
                    let div = createSingleNewsItem(newsItems[i])
                    newsItemsDiv.appendChild(div)
                }

            }
            setTimeout(getNewsItems, 5000)
        }
    }
}

function updateNewsItem(item, html) {
    let comments = html.getElementsByClassName("comment-section")[0]
    getCommentsForNewsItem(item.id, comments)
}

function createSingleNewsItem(item) {
    let div = document.createElement("div")
    div.className = "news-div"
    div.id = "news-" + item.id

    let newsItem = document.createElement("div")
    newsItem.className = "news-item"

    let header = document.createElement("h2")
    header.innerText = item.title

    let content = document.createElement("p")
    content.innerText = item.text

    let date = document.createElement("small")
    date.innerText = item.date.dayOfMonth + "-" + item.date.month + "-" + item.date.year

    let author = document.createElement("i")
    author.innerText = item.author

    let comments = document.createElement("div")
    comments.className = "comment-section"

    let addCommentFrom = createCommentForm(item)

    getCommentsForNewsItem(item.id, comments)

    comments.append(addCommentFrom)

    newsItem.append(header, content, date, author)
    div.append(newsItem, comments)

    return div
}

function createCommentForm(item) {
    let form = document.createElement("div")
    form.className = "add-comment"

    let id = document.createElement("input")
    id.type = "hidden"
    id.value = item.id
    id.readOnly = true
    id.name = "id"

    let inputDivAuthor = document.createElement("div")
    inputDivAuthor.className = "input-container"

    let authorLabel = document.createElement("label")
    authorLabel.for = "author"
    authorLabel.innerText = "Author"

    let authorInput = document.createElement("input")
    authorInput.type = "text"
    authorInput.name = "author"

    inputDivAuthor.append(authorLabel, authorInput)

    let inputDivText = document.createElement("div")
    inputDivText.className = "input-container"

    let textLabel = document.createElement("label")
    textLabel.for = "text"
    textLabel.innerText = "Text"

    let textInput = document.createElement("textarea")
    textInput.name = "text"

    inputDivText.append(textLabel, textInput)

    let buttonDiv = document.createElement("div")
    buttonDiv.className = "input-container"

    let button = document.createElement("button")
    button.innerText = "submit"
    button.addEventListener("click", evt => postNewComment(evt))

    console.log(button)

    buttonDiv.append(button)

    form.append(id, inputDivAuthor, inputDivText, buttonDiv)

    return form
}

function getCommentsForNewsItem(id, div) {
    fetch("Controller?command=Comments&id=" + id)
        .then((res) => res.json())
        .then(comments => showCommentsForNewsItem(comments, div))
}

function showCommentsForNewsItem(comments, div) {
    let toDelete = div.querySelectorAll(".comment")
    toDelete.forEach(e => e.remove())

    for (let i = 0; i < comments.length; i++) {
        let commentHTML = showSingleComment(comments[i]);
        div.append(commentHTML)
    }

}

function showSingleComment(comment) {
    let div = document.createElement("div")
    div.className = "comment"
    div.id = "comment-" + comment.id

    let text = document.createElement("p")
    text.innerText = comment.text

    let author = document.createElement("i")
    author.innerText = comment.author

    let date = document.createElement("small")
    date.innerText = comment.date.dayOfMonth + "-" + comment.date.month + "-" + comment.date.year

    div.append(text, author, date)

    return div
}

function postNewComment(evt) {
    let text = evt.target.parentElement.parentElement.getElementsByTagName("textarea")[0]
    let author = evt.target.parentElement.parentElement.getElementsByTagName("input")[1]
    let newsid = evt.target.parentElement.parentElement.getElementsByTagName("input")[0]
    console.log(text)
    console.log(author)
    console.log(newsid)
    fetch("Controller?command=AddComment&text=" + encodeURIComponent(text.value) + "&author=" + encodeURIComponent(author.value) + "&id=" + encodeURIComponent(newsid.value), {
        method: 'POST',
        header: {"Content-Type": "application/x-www-form-urlencoded"}
    })
    text.value = ""
    author.value = ""
}