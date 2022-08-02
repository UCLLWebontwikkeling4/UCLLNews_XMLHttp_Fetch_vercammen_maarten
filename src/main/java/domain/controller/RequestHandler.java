
package domain.controller;


import domain.model.NewsItemRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public abstract class RequestHandler {

    NewsItemRepository repository;

    public abstract String handleRequest(HttpServletRequest request, HttpServletResponse response) throws IOException;

    public void setRepository(NewsItemRepository repository){
        this.repository = repository;
    }

    public NewsItemRepository getRepository() {
        return repository;
    }
}
