package com.flatmates.bb.domain.service;

import com.flatmates.bb.domain.entity.StickerType;
import java.util.Collection;



public interface StickerTypeService {

		String saveStickerType(StickerType type);
		
		void removeStickerType(StickerType type);
		
		Collection<StickerType> findAll();

}
