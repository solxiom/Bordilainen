package com.flatmates.board.domain.service;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import java.util.Collection;
/**
 *
 * @author kavan soleimanbeigi
 */

public interface BulletinBoardService {


	String createBulletinBoard(String buildingComplexId);
		
	void addStickerToBoard(String bulletin_id,Sticker sticker);	
	
	Sticker findStickerById(String bulletin_id, String sticker_id);
	
	Collection<Sticker> findAllStickers(String bulletin_id);
		
	void removeStickerFromBoard(Sticker sticker);
        
        void removeAllStickersFromBoard(String board_id);
	
	Collection<BulletinBoard> listAllBoards();
	
	BulletinBoard findBoardById(String board_id);
        
	void removeBoardById(String board_id);
        
        
	
	
}
