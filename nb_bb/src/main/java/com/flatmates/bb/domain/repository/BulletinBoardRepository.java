package com.flatmates.bb.domain.repository;

import com.flatmates.bb.domain.entity.BulletinBoard;
import com.flatmates.bb.domain.entity.Sticker;
import java.util.Collection;


public interface BulletinBoardRepository {


	String saveBulletinBoard(BulletinBoard board);
		
	void addStickerToBoard(String board_id,Sticker sticker);
	
	Sticker findStickerById(String bulletin_id,String sticker_id);
	
	Collection<Sticker> findAllStickers(String board_id);
	
	void removeStickerFromBoard(Sticker sticker);
	
	Collection<BulletinBoard> listAllBoards();
	
	BulletinBoard findBoardById(String board_id);
	
}
