

package domain.controller;
import domain.model.NewsItemRepository;

public class HandlerFactory {

    public RequestHandler getHandler(String command, NewsItemRepository repository) {
        RequestHandler handler = null;
        try {
            Class handlerClass = Class.forName("domain.controller.page." + command);
            Object objectHandler = handlerClass.getConstructor().newInstance();
            handler = (RequestHandler) objectHandler;
            handler.setRepository(repository);
        } catch (Exception e) {
            throw new RuntimeException("This page does not exist!");
        }
        return handler;
    }
}