package com.flatmates.board.domain.entity;
//    @Id

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 *
 * @author kavan soleimanbeigi
 */

@Document
public class StickerType {

    @Id
    private String id;
//    @NotNull
    private String name;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
