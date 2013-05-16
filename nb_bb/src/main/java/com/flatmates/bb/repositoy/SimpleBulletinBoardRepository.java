package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.BulletinBoard;
import com.flatmates.bb.domain.entity.Comment;
import com.flatmates.bb.domain.entity.Sticker;
import com.flatmates.bb.domain.repository.BulletinBoardRepository;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.springframework.stereotype.Repository;


@Repository
public class SimpleBulletinBoardRepository implements BulletinBoardRepository {

	Collection<BulletinBoard> bbmanager = new LinkedList<BulletinBoard>();
	Collection<Sticker> stickermanager = new LinkedList<Sticker>();
	Collection<Comment> commentManager = new LinkedList<Comment>();
	
	@Override
	public String saveBulletinBoard(BulletinBoard board) {
		board.setId(UUID.randomUUID().toString());
		bbmanager.add(board);
		return board.getId();
	}
	@Override
	public Collection<BulletinBoard> listAllBoards() {
		return bbmanager;
	}
	@Override
	public BulletinBoard findBoardById(String board_id) {
		for(BulletinBoard bb : bbmanager){
			if(bb.getId().equalsIgnoreCase(board_id)){
				return bb;
			}
		}
		return null;
	}

	@Override
	public void addStickerToBoard(String board_id, Sticker sticker) {
		sticker.setBulletin_id(board_id);
		sticker.setId(UUID.randomUUID().toString());
		for(BulletinBoard bb : bbmanager){
			if(bb.getId().equalsIgnoreCase(board_id)){
				bb.addSticker(sticker);
			}
		}
		stickermanager.add(sticker);
		
	}

	@Override
	public Sticker findStickerById(String bulletin_id, String sticker_id) {
		for(Sticker sticker: stickermanager ){
			if(sticker.getId().equalsIgnoreCase(sticker_id) && 
					sticker.getBulletin_id().equalsIgnoreCase(bulletin_id)){
						return sticker;
				
			}
		}
		return null;
	}

	@Override
	public Collection<Sticker> findAllStickers(String board_id) {
		Collection<Sticker> wantedList = new LinkedList<Sticker>();
		for(Sticker sticker: stickermanager ){
			if (sticker.getBulletin_id().equalsIgnoreCase(board_id)){
				wantedList.add(sticker);
			}
		}
		return wantedList;
	}

	@Override
	public void removeStickerFromBoard(Sticker sticker) {
		String id = sticker.getBulletin_id();
		for(BulletinBoard bb : bbmanager){
			if(bb.getId().equalsIgnoreCase(id)){
				bb.getStickers().remove(sticker);
			}
		}
		//removing comments related to sticker
		for(Comment cm : commentManager){
			if(cm.getSticker_id().equalsIgnoreCase(sticker.getId())){
				commentManager.remove(cm);
			}
		}
		stickermanager.remove(sticker);
	}

}
