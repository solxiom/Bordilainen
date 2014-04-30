package com.flatmates.board.domain.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 *
 * @author kavan soleimanbeigi
 */
@Document
public class Sticker {

    @Id
    private String id;
    private String bulletin_id;
    private String type_Id;
//    @NotNull
    private String email;
//    @NotNull
    private String password;
    private int reportCount;
    private String summary;
//    @NotNull
    private String title;
//    @NotNull
    private String description;
//    @NotNull
    private String expiration_date;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBulletin_id() {
        return bulletin_id;
    }

    public void setBulletin_id(String bulletin_id) {
        this.bulletin_id = bulletin_id;
    }

    public String getType_Id() {
        return type_Id;
    }

    public void setType_Id(String type_Id) {
        this.type_Id = type_Id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getReportCount() {
        return reportCount;
    }

    public void setReportCount(int reportCount) {
        this.reportCount = reportCount;
    }

    public void increaseReporCount() {
        this.reportCount++;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(String expiration_date) {
        this.expiration_date = expiration_date;
    }

    @Override
    public String toString() {
        return "Sticker{" + "id=" + id + ", bulletin_id=" + bulletin_id + ", type_Id=" + type_Id + ", email=" + email + ", password=" + password + ", reportCount=" + reportCount + ", summary=" + summary + ", title=" + title + ", description=" + description + ", expiration_date=" + expiration_date + '}';
    }
    
}
