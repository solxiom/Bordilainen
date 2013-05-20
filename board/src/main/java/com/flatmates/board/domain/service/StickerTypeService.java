package com.flatmates.board.domain.service;

import com.flatmates.board.domain.entity.StickerType;
import java.util.Collection;

/**
 *
 * @author kavan soleimanbeigi
 */

public interface StickerTypeService {

		String saveStickerType(StickerType type);
		
		void removeStickerType(StickerType type);
		
		Collection<StickerType> findAll();

}
