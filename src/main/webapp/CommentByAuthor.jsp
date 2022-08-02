<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Overview</title>
    <link rel="stylesheet" href="css/Style.css">
</head>
<body>
<nav>
    <a href="index.jsp">Index</a>
    <a href="CommentByAuthor.jsp">Find Comments By Author</a>
</nav>
<h1>UCLL news</h1>
<div class="searchAuthor">
    <p class="inputcontainer">
        <label for="author">Author</label>
        <input type="text" id="author" name="author" value=""/>
    </p>
    <p class="inputcontainer">
        <input type="button" id="searchauthorcommentbutton" value="Search"/>
    </p>
    <div>
        <table id="table">
            <thead>
            <tr>
                <th>Message</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

</div>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="js/AuthorComments.js"></script>
</body>
</html>