package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.StickerType;
import com.flatmates.bb.domain.repository.StickerTypeRepository;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.springframework.stereotype.Repository;


@Repository
public class SimpleStickerTypeRepository implements StickerTypeRepository {

	
	Collection<StickerType> stManager = new LinkedList<StickerType>();
	
	@Override
	public String saveStickerType(StickerType type) {
		type.setId(UUID.randomUUID().toString());
		stManager.add(type);
		return type.getId();
	}

	@Override
	public void removeStickerType(StickerType type) {
		stManager.remove(type);
	}

	@Override
	public Collection<StickerType> findAll() {
		return stManager;
	}

}
