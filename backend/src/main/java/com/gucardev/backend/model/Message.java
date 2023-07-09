package com.gucardev.backend.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.management.ConstructorParameters;

@Data
@Getter
@Setter
public class Message {
    private MessageType type;
    private String message;
    private String room;
    private String from;
    private String to;

    public Message(){

    }
    public Message(MessageType type, String message, String room, String from, String to) {
        this.type = type ;
        this.message = message ;
        this.room = room ;
        this.from = from ;
        this.to = to ;
    }

}
