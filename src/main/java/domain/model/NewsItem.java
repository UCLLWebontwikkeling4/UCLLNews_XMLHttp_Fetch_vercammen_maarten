package domain.model;

import java.time.LocalDate;
import java.util.ArrayList;

public class NewsItem {
    private static int nextId = 0;
    private int id;
    private String title;
    private String author;
    private String text;
    private LocalDate date;
    private ArrayList<Comment> comments;

    public NewsItem(String title, String author, String text) {
        this.id = nextId;
        nextId = nextId + 1;
        this.title = title;
        this.author = author;
        this.text = text;
        this.date = LocalDate.now();
        this.comments = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getText() {
        return text;
    }

    public ArrayList<Comment> getComments() {
        return comments;
    }

    public LocalDate getDate() {
        return date;
    }

    public void addComment(Comment comment){
        comments.add(comment);
    }
}