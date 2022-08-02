package domain.controller.page;

import domain.controller.RequestHandler;
import domain.model.NewsItem;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDate;

public class Add extends RequestHandler {


    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String title = request.getParameter("title");
        String text = request.getParameter("text");
        String author = request.getParameter("author");

        if (title.equals("") && text.equals("") && author.equals("")) {
            response.setStatus(400);
            return "No Data";
        }
        NewsItem item = new NewsItem(title, author, text);

        getRepository().add(item);
        response.setStatus(200);
        return "OK";
    }
}
