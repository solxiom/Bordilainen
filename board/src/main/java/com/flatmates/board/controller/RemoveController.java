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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;

/**
 *
 * @author kavan soleimanbeigi
 */
@Controller
@RequestMapping(value = "/remove")
public class RemoveController {

    @Autowired
    private BulletinBoardService boardService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private BuildingComplexService buildingService;

    @RequestMapping(value = "/building/{building_id}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> removeBuilding(@PathVariable String building_id) {
        Collection<String> log = new LinkedList<String>();
        buildingService.removeBuildingComplex(buildingService.findBuildingById(building_id));        
        removeEveryStickerComments(boardService.findAllStickers(building_id));
        boardService.removeAllStickersFromBoard(building_id);
        boardService.removeBoardById(building_id);
        return log;
    }
    @RequestMapping(value = "/sticker/{building_id}/{sticker_id}", method = RequestMethod.POST)
    public @ResponseBody
    Collection<String> removeSticker(@PathVariable String building_id
            ,@PathVariable String sticker_id, @RequestBody String[] auth) {
        Collection<String> log = new LinkedList<String>();
        String board_id = ControlTool.findBoardIdByBuilding(boardService.listAllBoards(), building_id);
        Sticker sticker =boardService.findStickerById(board_id, sticker_id); 
                  
        if(ControlTool.stickerAuthenticationCheck(log,sticker,auth) ){
            boardService.removeStickerFromBoard(sticker);
            Collection<Sticker> stickerOfComments = new LinkedList<Sticker>();
            stickerOfComments.add(sticker);
            removeEveryStickerComments(stickerOfComments);
            log.add("success!");
        }else{
            log.add("authentication failed [auth email:"+ auth[0]
                    +" password:"+auth[1]+"] \n [actual email:" +
                    sticker.getEmail() + " password: " + sticker.getPassword()+"]");
        }
        return log;
    }

    private void removeEveryStickerComments(Collection<Sticker> sts) {
        Collection commentsToBeremoved = new LinkedList();
        for(Sticker s : sts){
            Collection<Comment> cms = commentService.listAll();
            for(Comment c : cms){
                if(s.getId().equalsIgnoreCase(c.getSticker_id())){
                  commentsToBeremoved.add(c);
                }
            }
        }
        Collection<Comment> cms2 = commentService.listAll();
        for(Comment c : cms2){
            commentService.removeComment(c);
        }
    }
   
}
