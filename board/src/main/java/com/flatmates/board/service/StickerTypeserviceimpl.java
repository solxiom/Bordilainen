package com.flatmates.board.service;

import com.flatmates.board.domain.entity.StickerType;
import com.flatmates.board.domain.repository.StickerTypeRepository;
import com.flatmates.board.domain.service.StickerTypeService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 *
 * @author kavan soleimanbeigi
 */
@Service
public class StickerTypeserviceimpl implements StickerTypeService {

    @Autowired
    StickerTypeRepository repo;

    public StickerTypeserviceimpl() {
    }

    public StickerTypeserviceimpl(StickerTypeRepository repo) {
        this.repo = repo;
    }

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
