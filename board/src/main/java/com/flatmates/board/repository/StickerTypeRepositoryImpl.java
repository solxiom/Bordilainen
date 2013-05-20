package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.StickerType;
import com.flatmates.board.domain.repository.StickerTypeRepository;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
/**
 *
 * @author kavan soleimanbeigi
 */

public class StickerTypeRepositoryImpl implements StickerTypeRepository {

    @Autowired 
    MongoTemplate dbManager;
    
	@Override
	public String saveStickerType(StickerType type) {
		dbManager.save(type);
		return type.getId();
	}

	@Override
	public void removeStickerType(StickerType type) {
		dbManager.remove(type);
		
	}

	@Override
	public Collection<StickerType> findAll() {
		
		return dbManager.findAll(StickerType.class);
	}



}
