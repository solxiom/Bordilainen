package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.repository.BulletinBoardRepository;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * @author bakharzy
 */
public class BulletinBoardRepositoryTest {

    BulletinBoardRepository boardRepo = new SimpleBulletinBoardRepository();

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void testSaveBulletinBoard() {
        System.out.println("SaveBulletinBoardTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        BulletinBoard expected3 = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        expected3.setBuilding_id(buildingId);
        String id = boardRepo.saveBulletinBoard(expected);
        String id2 = boardRepo.saveBulletinBoard(expected2);
        String id3 = boardRepo.saveBulletinBoard(expected3);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertNull(id2);
        assertFalse(id3.contains("Building ID has already exists for another board!"));
        assertEquals(1, boardRepo.listAllBoards().size());
        assertNotNull(expected.getBuilding_id());
        assertEquals(expected.getBuilding_id(), actual.getBuilding_id());
        assertEquals(expected.getId(), actual.getId());
        assertNotNull(actual.getId());
    }

    @Test
    public void testListAllBoards() {
        System.out.println("ListAllBoardsTest");
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
        System.out.println("FindBoardByIdTest");
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
        System.out.println("AddStickerToBoardTest");
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertTrue(actual.getStickers().contains(sticker));
        assertTrue(boardRepo.findAllStickers(id).contains(sticker) );
    }

    @Test
    public void testFindStickerById() {
        System.out.println("FindStickerByIdTest");
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
        System.out.println("FindAllStickersTest");
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        boardRepo.addStickerToBoard(id, sticker2);
        assertEquals(2, boardRepo.findAllStickers(id).size());
        assertEquals(2, boardRepo.findBoardById(id).getStickers().size());
    }

    @Test
    public void testRemoveStickerFromBoard() {
        System.out.println("RemoveStickerFromBoardTest");
        BulletinBoard expected = createBulletinBoard();
        Sticker sticker = createSticker();
        String id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(id, sticker);
        assertTrue(boardRepo.findAllStickers(id).contains(sticker));
        boardRepo.removeStickerFromBoard(sticker);
        BulletinBoard actual = boardRepo.findBoardById(id);
        assertFalse(actual.getStickers().contains(sticker));
    }

    @Test
    public void testRemoveBoardById() {
        System.out.println("RemoveBoardByIdTest");
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
        System.out.println("RemoveAllStickersFromBoardTest");
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
        return board;
    }

    private Sticker createSticker() {
        Sticker sticker = new Sticker();
        sticker.setPassword("pass");
        sticker.setBulletin_id("old id");
        return sticker;
    }
}
