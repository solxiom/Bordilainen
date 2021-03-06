package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.repository.BulletinBoardRepository;
import java.util.UUID;
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
    public void testSaveBulletinBoardCaseSuccessfulAddWithBuildingIdSet() {
        System.out.println("SaveBulletinBoardCaseSuccessfulAddWithBuildingIdSetTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        assertEquals(0, boardRepo.listAllBoards().size());
        String board_id = boardRepo.saveBulletinBoard(expected);
        BulletinBoard actual = boardRepo.findBoardById(board_id);
        assertEquals(1, boardRepo.listAllBoards().size());
        assertNotNull(expected.getBuilding_id());
        assertEquals(expected.getBuilding_id(), actual.getBuilding_id());
        assertEquals(expected.getId(), actual.getId());
        assertNotNull(actual.getId());
    }

    @Test
    public void testSaveBulletinBoardCaseFailedAddWithBuildingIdNotSet() {
        System.out.println("SaveBulletinBoardCaseFailedAddWithBuildingIdNotSetTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(null);
        assertEquals(0, boardRepo.listAllBoards().size());
        String board_id = boardRepo.saveBulletinBoard(expected);
        assertNull(board_id);
        assertEquals(0, boardRepo.listAllBoards().size());
    }

    @Test
    public void testSaveBulletinBoardCaseFailedAddWithBuildingIdEmpty() {
        System.out.println("SaveBulletinBoardCaseFailedAddWithBuildingIdEmptyTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id("");
        assertEquals(0, boardRepo.listAllBoards().size());
        String board_id = boardRepo.saveBulletinBoard(expected);
        assertNull(board_id);
        assertEquals(0, boardRepo.listAllBoards().size());
    }

    @Test
    public void testSaveBulletinBoardCaseFailedAddWithBuildingIdAlreadySetForAnotherBoard() {
        System.out.println("testSaveBulletinBoardCaseFailedAddWithBuildingIdAlreadySetForAnotherBoardTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        expected2.setBuilding_id(buildingId);
        String board_id = boardRepo.saveBulletinBoard(expected);
        String board_id2 = boardRepo.saveBulletinBoard(expected2);
        BulletinBoard actual = boardRepo.findBoardById(board_id);
        assertNull(board_id2);
        assertEquals(1, boardRepo.listAllBoards().size());
        assertNotNull(expected.getBuilding_id());
        assertEquals(expected.getBuilding_id(), actual.getBuilding_id());
        assertEquals(expected.getId(), actual.getId());
        assertNotNull(actual.getId());
    }

    @Test
    public void testListAllBoards() {
        System.out.println("ListAllBoardsTest");
        String buildingId = "some id";
        assertEquals(0, boardRepo.listAllBoards().size());
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        String expectedBuildingId = expected.getBuilding_id();
        String board_id = boardRepo.saveBulletinBoard(expected);
        assertEquals(1, boardRepo.listAllBoards().size());
        BulletinBoard actual = (BulletinBoard) boardRepo.listAllBoards().toArray()[0];
        assertEquals(expectedBuildingId, actual.getBuilding_id());
        boardRepo.removeBoardById(board_id);
        assertEquals(0, boardRepo.listAllBoards().size());
    }

    @Test
    public void testFindBoardById() {
        System.out.println("FindBoardByIdTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        String expectedId = "test id";
        String someBuildingId = "building 2";
        expected.setBuilding_id(buildingId);
        expected2.setBuilding_id(someBuildingId);
        expected.setId(expectedId);
        assertNull(boardRepo.findBoardById(expectedId));
        String board_id = boardRepo.saveBulletinBoard(expected);
        String board_id2 = boardRepo.saveBulletinBoard(expected2);
        BulletinBoard foundBoard = boardRepo.findBoardById(board_id);
        assertNotNull(foundBoard);
        assertEquals(expected.getBuilding_id(), foundBoard.getBuilding_id());
        assertNotSame(expected2.getBuilding_id(), foundBoard.getBuilding_id());

    }

    @Test
    public void testAddStickerToBoardCaseAddStickerWithUniqueId() {
        System.out.println("testAddStickerToBoardCaseAddStickerWithUniqueIdTest");
        String buildingId = "some id";
        String sameStickerId = "sticker test id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        sticker.setId(sameStickerId);
        sticker2.setId(sameStickerId);
        String board_id = boardRepo.saveBulletinBoard(expected);
        boardRepo.removeAllStickersFromBoard(board_id);
        boardRepo.addStickerToBoard(board_id, sticker);
        boardRepo.addStickerToBoard(board_id, sticker2);
        Sticker[] ar = boardRepo.findAllStickers(board_id).toArray(new Sticker[boardRepo.findAllStickers(board_id).size()]);
        assertNotSame(ar[0].getId(), ar[1].getId());
    }

    @Test
    public void testAddStickerToBoardCaseStickerMustHaveEmailAndPassword() {
        System.out.println("AddStickerToBoardCaseStickerMustHaveEmailAndPasswordTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        Sticker sticker = createSticker();
        sticker.setEmail(null);
        sticker.setPassword(null);
        String board_id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(board_id, sticker);
        for (Sticker s : boardRepo.findAllStickers(board_id)) {
            assertNotNull(s.getEmail());
            assertNotNull(s.getPassword());
        }
        sticker.setEmail("");
        sticker.setPassword("");
        boardRepo.addStickerToBoard(board_id, sticker);
        for (Sticker s : boardRepo.findAllStickers(board_id)) {
            assertNotSame("", s.getEmail());
            assertNotSame("", s.getPassword());
        }
    }

    @Test
    public void testFindStickerById() {
        System.out.println("FindStickerByIdTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        Sticker sticker = createSticker();
        String board_id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(board_id, sticker);
        Sticker actual = boardRepo.findStickerById(board_id, sticker.getId());
        assertEquals(sticker.getPassword(), actual.getPassword());
        assertEquals(sticker.getBulletin_id(), actual.getBulletin_id());

    }

    @Test
    public void testFindAllStickers() {
        System.out.println("FindAllStickersTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        String board_id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(board_id, sticker);
        boardRepo.addStickerToBoard(board_id, sticker2);
        assertEquals(2, boardRepo.findAllStickers(board_id).size());
        assertEquals(2, boardRepo.findBoardById(board_id).getStickers().size());
    }

    @Test
    public void testRemoveStickerFromBoard() {
        System.out.println("RemoveStickerFromBoardTest");
        String buildingId = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId);
        Sticker sticker = createSticker();
        String board_id = boardRepo.saveBulletinBoard(expected);
        boardRepo.addStickerToBoard(board_id, sticker);
        assertTrue(boardRepo.findAllStickers(board_id).contains(sticker));
        boardRepo.removeStickerFromBoard(sticker);
        BulletinBoard actual = boardRepo.findBoardById(board_id);
        assertFalse(actual.getStickers().contains(sticker));
    }

    @Test
    public void testRemoveBoardById() {
        System.out.println("RemoveBoardByIdTest");
        String buildingId1 = "some id";
        String buildingId2 = "some other id";
        BulletinBoard expected = createBulletinBoard();
        BulletinBoard expected2 = createBulletinBoard();
        expected.setBuilding_id(buildingId1);
        expected2.setBuilding_id(buildingId2);
        String board_id = boardRepo.saveBulletinBoard(expected);
        String board_id2 = boardRepo.saveBulletinBoard(expected2);
        assertEquals(2, boardRepo.listAllBoards().size());
        assertNotNull(boardRepo.findBoardById(board_id));
        assertNotNull(boardRepo.findBoardById(board_id2));
        boardRepo.removeBoardById(board_id);
        assertEquals(1, boardRepo.listAllBoards().size());
        assertNull(boardRepo.findBoardById(board_id));
        assertNotNull(boardRepo.findBoardById(board_id2));
    }

    @Test
    public void testRemoveAllStickersFromBoard() {
        System.out.println("RemoveAllStickersFromBoardTest");
        String buildingId1 = "some id";
        BulletinBoard expected = createBulletinBoard();
        expected.setBuilding_id(buildingId1);
        String board_id = boardRepo.saveBulletinBoard(expected);
        Sticker sticker = createSticker();
        Sticker sticker2 = createSticker();
        assertEquals(0, boardRepo.findAllStickers(board_id).size());
        boardRepo.addStickerToBoard(board_id, sticker);
        boardRepo.addStickerToBoard(board_id, sticker2);
        assertEquals(2, boardRepo.findAllStickers(board_id).size());
        boardRepo.removeAllStickersFromBoard(board_id);
        assertEquals(0, boardRepo.findAllStickers(board_id).size());

    }

    private BulletinBoard createBulletinBoard() {
        BulletinBoard board = new BulletinBoard();
        board.setBuilding_id(UUID.randomUUID().toString());
        board.setId(UUID.randomUUID().toString());
        return board;
    }

    private Sticker createSticker() {
        Sticker sticker = new Sticker();
        sticker.setEmail("test@mail.com");
        sticker.setPassword("myPass");
        sticker.setTitle("myTitle");
        sticker.setExpiration_date("01.01.2015");
        sticker.setDescription("someDescription");
        sticker.setType_Id("sell");
        sticker.setBulletin_id("old id");
        return sticker;
    }
}
