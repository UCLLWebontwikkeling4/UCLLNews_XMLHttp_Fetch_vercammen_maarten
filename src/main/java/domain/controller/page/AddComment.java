package domain.controller.page;

import domain.controller.RequestHandler;
import domain.model.Comment;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddComment extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int newItemId = Integer.parseInt(request.getParameter("id"));
        String author = request.getParameter("author");
        String text = request.getParameter("text");

        Comment comment = new Comment(author, text);
        getRepository().getNewsitemById(newItemId).addComment(comment);
        response.setStatus(200);
        return "OK";
    }
}
