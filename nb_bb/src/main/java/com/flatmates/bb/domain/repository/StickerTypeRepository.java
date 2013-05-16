package com.flatmates.bb.domain.repository;

import com.flatmates.bb.domain.entity.StickerType;
import java.util.Collection;



public interface StickerTypeRepository {

		String saveStickerType(StickerType type);
		
		void removeStickerType(StickerType type);
		
		Collection<StickerType> findAll();

}
