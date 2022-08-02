package domain.controller.page;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.controller.RequestHandler;
import domain.model.Comment;
import domain.model.NewsItem;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Comments extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        int newsItemId = Integer.parseInt(request.getParameter("id"));
        List<Comment> comments = getRepository().getCommentsForNewsItem(newsItemId);
        comments.sort(Comparator.comparing(Comment::getDate));
        int size = Math.min(comments.size(), 5);
        comments = comments.subList(0, size);
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
