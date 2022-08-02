package domain.model;

import java.util.ArrayList;
import java.util.List;

public class NewsItemRepository {

    private List<NewsItem> newsItems = new ArrayList<>();

    public NewsItemRepository() {
        NewsItem newsItem = new NewsItem("ISP invullen", "Jef Jansens", "ISP invullen pls");
        NewsItem newsItem2 = new NewsItem("hallo", "Dirk Jansens", "dit is een test");
        Comment comment = new Comment("Kato", "Hallo");
        newsItem2.addComment(comment);
        add(newsItem);
        add(newsItem2);
    }

    public List<NewsItem> getAll(){
        return newsItems;
    }

    public void add(NewsItem item){
        newsItems.add(item);
    }

    public ArrayList<Comment> getCommentsForNewsItem(int id){
        for (NewsItem newsItem: newsItems) {
            if(newsItem.getId() == id){
                return newsItem.getComments();
            }
        }
        return new ArrayList<>();
    }

    public NewsItem getNewsitemById(int id) {
        for (NewsItem newsItem : newsItems) {
            if (newsItem.getId() == id) {
                return newsItem;
            }
        }
        return null;
    }

    public ArrayList<Comment> getCommentsForAuthor(String author) {
        ArrayList<Comment> comments = new ArrayList<>();
        for (NewsItem newsItem : newsItems) {
            for (Comment comment : newsItem.getComments()) {
                if (comment.getAuthor().equals(author)) {
                    comments.add(comment);
                }
            }
        }
        return comments;
    }
}
