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
            newsItemsDiv.innerHTML = ""
            for (let i = 0; i < newsItems.length; i++) {
                let div = showSingleNewsItem(newsItems[i])
                newsItemsDiv.appendChild(div)
            }
            setTimeout(getNewsItems, 5000)
        }
    }
}

function showSingleNewsItem(item) {
    let div = document.createElement("div")
    div.className = "news-div"

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
    getCommentsForNewsItem(item.id, comments)

    newsItem.append(header, content, date, author)
    div.append(newsItem, comments)

    return div
}

function getCommentsForNewsItem(id, div) {
    fetch("Controller?command=Comments&id=" + id)
        .then((res) => res.json())
        .then(comments => showCommentsForNewsItem(comments, div))
}

function showCommentsForNewsItem(comments, div) {
    for (let i = 0; i < comments.length; i++) {
        let commentHTML = showSingleComment(comments[i]);
        div.append(commentHTML)
    }
}

function showSingleComment(comment) {
    let div = document.createElement("div")
    div.className = "comment"

    let text = document.createElement("p")
    text.innerText = comment.text

    let author = document.createElement("i")
    author.innerText = comment.author

    let date = document.createElement("small")
    date.innerText = comment.date.dayOfMonth + "-" + comment.date.month + "-" + comment.date.year

    div.append(text, author, date)

    return div
}