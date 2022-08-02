package domain.controller.page;

import domain.controller.RequestHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Index extends RequestHandler {
    @Override
    public String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException {
        return "index.jsp";
    }
}
