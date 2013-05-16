package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.StickerType;
import com.flatmates.bb.domain.repository.StickerTypeRepository;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;


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
