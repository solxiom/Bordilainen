/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.domain.service.BulletinBoardService;
import com.flatmates.board.domain.service.CommentService;
import java.util.Collection;
import java.util.LinkedList;
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
        String boardId = ControlTool.findBoardIdByBuilding(boardService.listAllBoards(), building_id);
        Sticker sticker = new Sticker();
        sticker.setBulletin_id(boardId);
        ControlTool.checkAndFillSticker(log, request, sticker);
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
        ControlTool.checkAndFillComment(log, request, comment);
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
        if (ControlTool.setAndSaveBuilding(buildingService, boardService, address)) {
            log.add("success!");
        } else {
            log.add("failed!");
        }
        return log;
    }
}
