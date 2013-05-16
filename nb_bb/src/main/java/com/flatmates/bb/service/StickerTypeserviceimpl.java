package com.flatmates.bb.service;

import com.flatmates.bb.domain.entity.StickerType;
import com.flatmates.bb.domain.repository.StickerTypeRepository;
import com.flatmates.bb.domain.service.StickerTypeService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StickerTypeserviceimpl implements StickerTypeService{
	@Autowired
	StickerTypeRepository repo;

	@Override
	public String saveStickerType(StickerType type) {
		repo.saveStickerType(type);
		return type.getId();
	}

	@Override
	public void removeStickerType(StickerType type) {
		repo.removeStickerType(type);		
	}

	@Override
	public Collection<StickerType> findAll() {
		return repo.findAll();
	}


}
