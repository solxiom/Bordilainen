package com.flatmates.board.service;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.repository.BulletinBoardRepository;
import com.flatmates.board.domain.service.BulletinBoardService;
import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
/**
 *
 * @author kavan soleimanbeigi
 */
@Service
public class BulletinBoardServiceImpl implements BulletinBoardService {

    @Autowired
    BulletinBoardRepository repo;

    public BulletinBoardServiceImpl() {
    }

    public BulletinBoardServiceImpl(BulletinBoardRepository repo) {
        this.repo = repo;
    }

    @Override
    public String createBulletinBoard(String buildingComplexId) {
        BulletinBoard board = new BulletinBoard();
        board.setBuilding_id(buildingComplexId);
        repo.saveBulletinBoard(board);
        return board.getId();
    }

    @Override
    public void addStickerToBoard(String bulletin_id, Sticker sticker) {
        repo.addStickerToBoard(bulletin_id, sticker);
    }

    @Override
    public Sticker findStickerById(String bulletin_id, String sticker_id) {
        return repo.findStickerById(bulletin_id, sticker_id);
    }

    @Override
    public Collection<Sticker> findAllStickers(String bulletin_id) {
        return repo.findAllStickers(bulletin_id);
    }

    @Override
    public void removeStickerFromBoard(Sticker sticker) {
        repo.removeStickerFromBoard(sticker);

    }

    @Override
    public Collection<BulletinBoard> listAllBoards() {

        return repo.listAllBoards();
    }

    @Override
    public BulletinBoard findBoardById(String board_id) {

        return repo.findBoardById(board_id);
    }

    @Override
    public void removeBoardById(String board_id) {
        repo.removeBoardById(board_id);
    }

    @Override
    public void removeAllStickersFromBoard(String board_id) {
        repo.removeAllStickersFromBoard(board_id);
    }
}
