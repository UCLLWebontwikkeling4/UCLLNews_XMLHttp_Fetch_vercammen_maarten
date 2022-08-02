let button = document.getElementById("searchAuthorCommentButton")
let field = document.getElementById("author")
let timerId = undefined;

button.onclick = findCommentsOfAuthor
field.oninput = clear

function clear() {
    clearTimeout(timerId)
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    table.innerHTML = ""
}

function findCommentsOfAuthor() {
    let name = field.value;
    axios.get("Controller?command=AuthorComments&name=" + name)
        .then(response => showCommentsForAuthor(response.data))
        .then(() => {
            timerId = setTimeout(findCommentsOfAuthor, 5000)
        })
}

function showCommentsForAuthor(comments) {
    let table = document.getElementById("table").getElementsByTagName("tbody")[0];
    table.innerHTML = ""
    for (let i = 0; i < comments.length; i++) {
        var comment = comments[i]
        var row = table.insertRow()
        var messageCell = row.insertCell()
        messageCell.innerText = comment.text
        var dateCell = row.insertCell()
        dateCell.innerText = comment.date.year + "-" + comment.date.month.toLowerCase() + "-" + comment.date.dayOfMonth
    }
}