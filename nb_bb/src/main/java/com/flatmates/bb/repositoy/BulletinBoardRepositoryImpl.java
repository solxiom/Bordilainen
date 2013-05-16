package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.BulletinBoard;
import com.flatmates.bb.domain.entity.Sticker;
import com.flatmates.bb.domain.repository.BulletinBoardRepository;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;


public class BulletinBoardRepositoryImpl implements BulletinBoardRepository {

	@Autowired
	MongoTemplate dbManager;
	
	@Override
	public String saveBulletinBoard(BulletinBoard board) {
		dbManager.save(board);
		return board.getId();
	}

	@Override
	public void addStickerToBoard(String board_id,Sticker sticker) {
		
		BulletinBoard board = dbManager
				.findById(new Query(Criteria.where("id").is(board_id)), BulletinBoard.class);
		board.addSticker(sticker);
		dbManager.save(sticker);
		dbManager.findAndModify(new Query(Criteria.where("id").is(board_id)), 
				Update.update("stickers", board.getStickers()), BulletinBoard.class);
		
	}

	@Override
	public Collection<Sticker> findAllStickers(String board_id){
		BulletinBoard board = dbManager
				.findById(new Query(Criteria.where("id").is(board_id)), BulletinBoard.class);
		return board.getStickers();
	}


	@Override
	public void removeStickerFromBoard(Sticker sticker) {
		 BulletinBoard board = dbManager.findById(new Query(Criteria.where("id").is(sticker.getBulletin_id())),
				 BulletinBoard.class);
		board.getStickers().remove(sticker);
		dbManager.findAndModify(new Query(Criteria.where("id").is(sticker.getBulletin_id())), 
				Update.update("stickers", board.getStickers()), BulletinBoard.class);
		dbManager.remove(sticker);
	}

	@Override
	public Sticker findStickerById(String bulletin_id, String sticker_id) {		
		return dbManager.findById(new Query(Criteria.where("bulletin_id")
				.is(bulletin_id).and("id").is(sticker_id)), Sticker.class);
	}

	@Override
	public Collection<BulletinBoard> listAllBoards() {
		
		return dbManager.findAll(BulletinBoard.class);
	}

	@Override
	public BulletinBoard findBoardById(String board_id) {
	
		return dbManager.findById(new Query(Criteria.where("id").is(board_id)), BulletinBoard.class);
	}



}
