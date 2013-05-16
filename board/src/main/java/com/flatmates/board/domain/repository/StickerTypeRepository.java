package com.flatmates.board.domain.repository;

import com.flatmates.board.domain.entity.StickerType;
import java.util.Collection;



public interface StickerTypeRepository {

		String saveStickerType(StickerType type);
		
		void removeStickerType(StickerType type);
		
		Collection<StickerType> findAll();

}
