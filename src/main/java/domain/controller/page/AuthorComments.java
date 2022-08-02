package domain.controller.page;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.controller.RequestHandler;
import domain.model.Comment;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AuthorComments extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        ArrayList<Comment> comments = getRepository().getCommentsForAuthor(name);
        response.setStatus(200);
        return commentsToJSON(comments);
    }

    private String commentsToJSON(List<Comment> newsItems) {
        ObjectMapper mapper = new ObjectMapper();
        String result = null;
        try {
            result = mapper.writeValueAsString(newsItems);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return result;
    }
}
