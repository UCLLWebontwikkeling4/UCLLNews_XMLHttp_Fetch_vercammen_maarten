package domain.controller.page;

import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import domain.controller.RequestHandler;
import domain.model.NewsItem;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class Overview extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        List<NewsItem> newsItems = getRepository().getAll();
        return newsToJSON(newsItems);
    }

    private String newsToJSON(List<NewsItem> newsItems) {
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