let addNewsItemRequest = new XMLHttpRequest();

let container = document.getElementById("add");

let titleInput = document.getElementById("title")

let authorInput = document.getElementById("author")

let textInput = document.getElementById("text")

let submit = document.getElementById("add-news-button")

submit.onclick = addNewsItem

function addNewsItem() {
    let data = "title=" + encodeURIComponent(titleInput.value) + "&text=" + encodeURIComponent(textInput.value) + "&author=" + encodeURIComponent(authorInput.value);
    addNewsItemRequest.open("POST", "Controller?command=Add", true)
    addNewsItemRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    addNewsItemRequest.onreadystatechange = onChange
    addNewsItemRequest.send(data)
}

function onChange() {
    if (addNewsItemRequest.readyState === 4) {
        if (addNewsItemRequest.status === 200) {
            titleInput.value = ""
            authorInput.value = ""
            textInput.value = ""
        }
        if (addNewsItemRequest.status === 400) {
            let error = document.createElement("p")
            error.innerText = "No data was given"
            error.className = "error"
            container.append(error)
        }
    }
}