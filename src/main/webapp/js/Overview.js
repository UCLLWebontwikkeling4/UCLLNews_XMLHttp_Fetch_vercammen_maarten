window.onload = getNewsItems

let getNewsItemsRequest = new XMLHttpRequest();

function getNewsItems() {
    getNewsItemsRequest.open("GET", "Controller?command=Overview", true)
    getNewsItemsRequest.onreadystatechange = showNewsItems
    getNewsItemsRequest.send()
}

function showNewsItems() {
    if(getNewsItemsRequest.readyState == 4){
        if(getNewsItemsRequest.status = 200){
            let newsItems = JSON.parse(getNewsItemsRequest.responseText)
            let newsItemsDiv = document.getElementById("news")
            console.log(newsItems)
            for (let i=0; i < newsItems.length; i++){
                let div = showSingleNewsItem(newsItems[i])
                newsItemsDiv.appendChild(div)
            }
        }
    }
}

function showSingleNewsItem(item) {
    let div = document.createElement("div")
    div.className = "news-item"

    let header = document.createElement("h2")
    header.innerText = item.title

    let content = document.createElement("p")
    content.innerText = item.text

    let date = document.createElement("small")
    date.innerText = item.date.dayOfMonth + "-" + item.date.month + "-" + item.date.year

    let author = document.createElement("i")
    author.innerText = item.author

    div.append(header, content, date, author)

    return div

}