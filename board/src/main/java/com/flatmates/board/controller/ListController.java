package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.BuildingComplex;
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

@Controller
@RequestMapping(value ="/list")
public class ListController {

	@Autowired
	private BulletinBoardService boardService;
	@Autowired
	private BuildingComplexService buildingService;
	@Autowired
	private CommentService commentService;
        @Autowired
	private CommentService stickerTypeService;
        

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody String listRoot() {
		return "what do you want to list?";
	}
	@RequestMapping(value = "/stickers/{board_id}" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Sticker> listBoardStickers(@PathVariable String board_id) {
		return boardService.findAllStickers(board_id);
	}
	@RequestMapping(value = "/buildings" ,method = RequestMethod.GET)
	public @ResponseBody Collection<BuildingComplex> listBuildingComplex(){
            Collection<BuildingComplex> res = buildingService.listAll();
            BuildingComplex nx = new BuildingComplex();
            nx.setId("232434343");
            nx.setAddress("Ida Albergin tie 345");
            res.add(nx);           
		return res;
	}
	@RequestMapping(value = "/comments/sticker_id" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Comment> listStickerComments(@PathVariable String sticker_id){
		return commentService.findByStickerId(sticker_id);
	}
	@RequestMapping(value = "/types" ,method = RequestMethod.GET)
	public @ResponseBody Collection<Comment> listStickerTypes(){
		return stickerTypeService.listAll();
	}
	
	
	
}