package com.flatmates.bb.domain.service;

import com.flatmates.bb.domain.entity.BulletinBoard;
import com.flatmates.bb.domain.entity.Sticker;
import java.util.Collection;


public interface BulletinBoardService {


	String createBulletinBoard(String buildingComplexId);
		
	void addStickerToBoard(String bulletin_id,Sticker sticker);	
	
	Sticker findStickerById(String bulletin_id, String sticker_id);
	
	Collection<Sticker> findAllStickers(String bulletin_id);
		
	void removeStickerFromBoard(Sticker sticker);
	
	Collection<BulletinBoard> listAllBoards();
	
	BulletinBoard findBoardById(String board_id);
	
	
}
