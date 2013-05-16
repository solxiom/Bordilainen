/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.service.BulletinBoardService;
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
@RequestMapping(value ="/add")
public class AddController {
    
    @Autowired
	private BulletinBoardService boardService;
    
    @RequestMapping(method = RequestMethod.GET)
	public @ResponseBody String listRoot() {
		return "what do you want to add?";
	}
    @RequestMapping(value = "/sticker/{board_id}" ,method = RequestMethod.POST)
	public @ResponseBody Collection<String> addStickerToBoard(@PathVariable String board_id, WebRequest request){
		Collection<String> errors = new LinkedList<String>();
		Sticker sticker = new Sticker();
		sticker.setBulletin_id(board_id);
	    checkAndFillSticker(errors,request,sticker);
	    if(errors.size() == 0){
			boardService.addStickerToBoard(board_id,sticker);
			errors.add("success!");
		}
		return errors;
	}
	
	private void checkAndFillSticker(Collection<String> errors,WebRequest request,Sticker sticker){
		if(request.getParameter("email")!= null){
			sticker.setEmail(request.getParameter("email"));
		}else{
			errors.add("email must not be null");
		}		
		if(request.getParameter("password")!= null){
			sticker.setPassword(request.getParameter("passwod"));
		}else{
			errors.add("password must not be null");
		}
		if(request.getParameter("summary")!= null){
			sticker.setSummary(request.getParameter("summary"));
		}else{
			//summary can be null!!
		}
		if(request.getParameter("title")!= null){
			sticker.setTitle(request.getParameter("title"));
		}else{
			errors.add("title must not be null");
		}
		if(request.getParameter("description")!= null){
			sticker.setDescription(request.getParameter("description"));
		}else{
			errors.add("description must not be null");
		}
		if(request.getParameter("type_id")!= null){
			sticker.setType_Id(request.getParameter("type_id"));
		}else{
			errors.add("type_id must not be null");
		}				
	}
}
