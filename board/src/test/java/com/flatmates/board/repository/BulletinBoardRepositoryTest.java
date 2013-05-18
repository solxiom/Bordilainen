package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.repository.BulletinBoardRepository;
import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class BulletinBoardRepositoryTest {

    BulletinBoardRepository boardRepo = new SimpleBulletinBoardRepository();

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void testSaveBulletinBoard() {
        BulletinBoard expected = createBulletinBoard();
        String id = boardRepo.saveBulletinBoard(expected);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertEquals(expected.getBuilding_id(), actual.getBuilding_id());
        assertEquals(expected.getId(), actual.getId());
        assertNotNull(actual.getId());
    }

    @Test
    public void testListAllBoards() {
        assertEquals(0, boardRepo.listAllBoards().size());
        BulletinBoard expected = createBulletinBoard();
        String expectedBuildingId = expected.getBuilding_id();
        String id = boardRepo.saveBulletinBoard(expected);
        assertEquals(1, boardRepo.listAllBoards().size());
        BulletinBoard actual = (BulletinBoard) boardRepo.listAllBoards().toArray()[0];
        assertEquals(expectedBuildingId, actual.getBuilding_id());
        boardRepo.removeBoardById(id);
        assertEquals(0, boardRepo.listAllBoards().size());
    }

    @Test
    public void testFindBoardById() {
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        String expectedId = "test id";
        String someBuildingId = "building 2";
        expected2.setBuilding_id(someBuildingId);
        expected.setId(expectedId);
        assertNull(boardRepo.findBoardById(expectedId));
        String id = boardRepo.saveBulletinBoard(expected);
        String id2 = boardRepo.saveBulletinBoard(expected2);
        BulletinBoard foundBoard = boardRepo.findBoardById(id);
        assertNotNull(foundBoard);
        assertEquals(expected.getBuilding_id(), foundBoard.getBuilding_id());
        assertNotSame(expected2.getBuilding_id(), foundBoard.getBuilding_id());

    }

    @Test
    public void testAddStickerToBoard() {
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertTrue(actual.getStickers().contains(sticker));
    }

    @Test
    public void testFindStickerById() {
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        Sticker actual = boardRepo.findStickerById(id, sticker.getId());
        assertEquals(sticker.getPassword(), actual.getPassword());
        assertEquals(sticker.getBulletin_id(), actual.getBulletin_id());

    }

    @Test
    public void testFindAllStickers() {
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        boardRepo.addStickerToBoard(id, sticker2);
        assertEquals(2, boardRepo.findAllStickers(id).size());
    }

    @Test
    public void testRemoveStickerFromBoard() {
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        boardRepo.removeStickerFromBoard(sticker);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertFalse(actual.getStickers().contains(sticker));
    }

    @Test
    public void testRemoveBoardById() {
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        String id = boardRepo.saveBulletinBoard(expected);
        String id2 = boardRepo.saveBulletinBoard(expected2);
        assertEquals(2, boardRepo.listAllBoards().size());
        assertNotNull(boardRepo.findBoardById(id));
        assertNotNull(boardRepo.findBoardById(id2));
        boardRepo.removeBoardById(id);
        assertEquals(1, boardRepo.listAllBoards().size());
        assertNull(boardRepo.findBoardById(id));
        assertNotNull(boardRepo.findBoardById(id2));
    }

    @Test
    public void testRemoveAllStickersFromBoard() {
        BulletinBoard expected = createBulletinBoard();
        String id = boardRepo.saveBulletinBoard(expected);
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        assertEquals(0, boardRepo.findAllStickers(id).size());
        boardRepo.addStickerToBoard(id, sticker);
        boardRepo.addStickerToBoard(id, sticker2);
        assertEquals(2, boardRepo.findAllStickers(id).size());
        boardRepo.removeAllStickersFromBoard(id);
        assertEquals(0, boardRepo.findAllStickers(id).size());

    }

    private BulletinBoard createBulletinBoard() {
        BulletinBoard board = new BulletinBoard();
        board.setBuilding_id("test building id");
        return board;
    }

    private Sticker createSticker() {
        Sticker sticker = new Sticker();
        sticker.setPassword("pass");
        sticker.setBulletin_id("old id");
        return sticker;
    }
}
