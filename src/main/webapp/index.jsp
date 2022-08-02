<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Overview</title>
    <link rel="stylesheet" href="css/Style.css">
</head>
<body>
<nav>
    <span>UCLL News</span>
    <ul>
        <li>
    <a href="index.jsp">Index</a>
        </li>
        <li>
    <a href="CommentByAuthor.jsp">Find</a>
        </li>
    </ul>
</nav>
<h1>UCLL news</h1>
<div id="news"></div>
<div class="add-post" id="add">
    <p class="input-container">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" value=""/>
    </p>
    <p class="input-container">
        <label for="author">Author</label>
        <input type="text" id="author" name="author" value=""/>
    </p>
    <p class="input-container">
        <label for="text">Text</label>
        <textarea name="text" id="text"></textarea>
    </p>
    <p class="input-container">
        <input type="button" id="add-news-button" value="Submit"/>
    </p>

</div>
<script type="text/javascript" src="js/Overview.js"></script>
<script type="text/javascript" src="js/AddNewsItem.js"></script>
</body>
</html>