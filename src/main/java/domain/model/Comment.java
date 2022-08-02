package domain.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class Comment {
    private static int nextId = 0;
    private int id;
    private String author;
    private String text;
    private LocalDateTime date;


    public Comment(String author, String text) {
        this.id = nextId;
        nextId++;
        this.author = author;
        this.text = text;
        this.date = LocalDateTime.now();
    }

    public int getId() {
        return id;
    }

    public String getAuthor() {
        return author;
    }

    public String getText() {
        return text;
    }

    public LocalDateTime getDate() {
        return date;
    }
}