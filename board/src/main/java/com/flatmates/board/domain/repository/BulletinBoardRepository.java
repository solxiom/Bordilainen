package com.flatmates.board.domain.repository;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import java.util.Collection;
/**
 *
 * @author kavan soleimanbeigi
 */

public interface BulletinBoardRepository {


	String saveBulletinBoard(BulletinBoard board);
		
	void addStickerToBoard(String board_id,Sticker sticker);
	
	Sticker findStickerById(String bulletin_id,String sticker_id);
	
	Collection<Sticker> findAllStickers(String board_id);
	
	void removeStickerFromBoard(Sticker sticker);
        
        void removeAllStickersFromBoard(String board_id);
	
	Collection<BulletinBoard> listAllBoards();
	
	BulletinBoard findBoardById(String board_id);
        
	void removeBoardById(String board_id);
	
}
