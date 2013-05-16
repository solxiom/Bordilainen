package com.flatmates.bb.controller;

import com.flatmates.bb.domain.entity.BuildingComplex;
import com.flatmates.bb.domain.entity.Comment;
import com.flatmates.bb.domain.entity.Sticker;
import com.flatmates.bb.domain.service.BuildingComplexService;
import com.flatmates.bb.domain.service.BulletinBoardService;
import com.flatmates.bb.domain.service.CommentService;
import java.util.Collection;
import java.util.LinkedList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.WebRequest;

@Controller
public class BBController {

	@Autowired
	private BulletinBoardService boardService;
	@Autowired
	private BuildingComplexService buildingService;
	@Autowired
	private CommentService commentService;

	@RequestMapping(value = "/list" ,method = RequestMethod.GET)
	public @ResponseBody String listRoot() {
		return "what do you want to list?";
	}
	@RequestMapping(value = "/list/stickers/{board_id}" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Sticker> listBoardStickers(@PathVariable String board_id) {
		return boardService.findAllStickers(board_id);
	}
	@RequestMapping(value = "/list/buildings" ,method = RequestMethod.GET)
	public @ResponseBody Collection<BuildingComplex> listBuildingComplex(){
		return buildingService.listAll();
	}
	@RequestMapping(value = "/list/comments/sticker_id" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Comment> listStickerComments(@PathVariable String sticker_id){
		return commentService.findByStickerId(sticker_id);
	}
	@RequestMapping(value = "/list/types" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Comment> listStickerTypes(@PathVariable String sticker_id){
		return commentService.findByStickerId(sticker_id);
	}
	@RequestMapping(value = "/add/sticker/{board_id}" ,method = RequestMethod.POST)
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
