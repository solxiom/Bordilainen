/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.domain.service.BulletinBoardService;
import com.flatmates.board.domain.service.CommentService;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;

/**
 *
 * @author kavansol
 */
@Controller
@RequestMapping(value = "/add")
public class AddController {

    @Autowired
    private BulletinBoardService boardService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private BuildingComplexService buildingService;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    String listRoot() {
        return "what do you want to add?";
    }
    /**
     * 
     * @param building_id
     * @param request
     * @return 
     */
    @RequestMapping(value = "/sticker/{building_id}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> addStickerToBuildingBoard(@PathVariable String building_id, WebRequest request) {
        Collection<String> log = new LinkedList<String>(); 
        String boardId = findBoardIdByBuilding(building_id);
        Sticker sticker = new Sticker();
        sticker.setBulletin_id(boardId);
        checkAndFillSticker(log, request, sticker);
        if (log.size() == 0) {
            boardService.addStickerToBoard(boardId, sticker);
            log.add("success!");
        }
        return log;
    }

    @RequestMapping(value = "/comment/{sticker_id}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> addCommentToSticker(@PathVariable String sticker_id, WebRequest request) {
        Collection<String> log = new LinkedList<String>();
        Comment comment = new Comment();
        comment.setSticker_id(sticker_id);
        checkAndFillComment(log, request, comment);
        if (log.size() == 0) {
            commentService.saveComment(comment);
            log.add("success!");
        }
        return log;
    }

    @RequestMapping(value = "/report/{sticker_id}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> addReportToSticker(@PathVariable String sticker_id) {
        Collection<String> log = new LinkedList<String>();
        log.add("This feature is not supported yet!");
        return log;
    }

    @RequestMapping(value = "/building/{address}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> addNewBuilding(@PathVariable String address, WebRequest request) {
        Collection<String> log = new LinkedList<String>();
        if (setAndSaveBuilding(address)) {
            log.add("success!");
        } else {
            log.add("failed!");
        }
        return log;
    }
    private String findBoardIdByBuilding(String building_id){
         Collection<BulletinBoard> boards =  boardService.listAllBoards();
        for(BulletinBoard board : boards){
            if(board.getBuilding_id().equalsIgnoreCase(building_id)){
                return board.getId();
            }
        }
        return null;
    }
    private boolean setAndSaveBuilding(String address) {
        try {
            BuildingComplex building = new BuildingComplex();
            building.setAddress(address);
            String building_id = buildingService.createBuildingComplex(building);
            BulletinBoard board = new BulletinBoard();
            boardService.createBulletinBoard(building_id);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    private void checkAndFillComment(Collection<String> log, WebRequest request, Comment comment) {
        if (request.getParameter("commentor_name") != null) {
            comment.setCommentor_name(request.getParameter("commentor_name"));
        } else {
            log.add("commentor must not be null");
        }
        if (request.getParameter("commentor_text") != null) {
            comment.setComment_text(request.getParameter("commentor_text"));
        } else {
            log.add("comment text must not be null");
        }
    }

    private void checkAndFillSticker(Collection<String> log, WebRequest request, Sticker sticker) {
        if (request.getParameter("email") != null) {
            sticker.setEmail(request.getParameter("email"));
        } else {
            log.add("email must not be null");
        }
        if (request.getParameter("password") != null) {
            sticker.setPassword(request.getParameter("passwod"));
        } else {
            log.add("password must not be null");
        }
        if (request.getParameter("summary") != null) {
            sticker.setSummary(request.getParameter("summary"));
        } else {
            //summary can be null!!
        }
        if (request.getParameter("title") != null) {
            sticker.setTitle(request.getParameter("title"));
        } else {
            log.add("title must not be null");
        }
        if (request.getParameter("description") != null) {
            sticker.setDescription(request.getParameter("description"));
        } else {
            log.add("description must not be null");
        }
        if (request.getParameter("type_id") != null) {
            sticker.setType_Id(request.getParameter("type_id"));
        } else {
            log.add("type_id must not be null");
        }
    }
}
