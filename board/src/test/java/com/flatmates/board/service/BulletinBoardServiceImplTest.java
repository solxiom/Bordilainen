/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.service;

import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.service.BulletinBoardService;
import com.flatmates.board.repository.SimpleBulletinBoardRepository;
import java.util.Collection;
import java.util.UUID;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author bakharzy
 */
public class BulletinBoardServiceImplTest {

    BulletinBoardService boardService;

    public BulletinBoardServiceImplTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        boardService = new BulletinBoardServiceImpl(new SimpleBulletinBoardRepository());
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of createBulletinBoard method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testCreateBulletinBoard() {
        System.out.println("createBulletinBoardTest");
        String id = createUniqueId();
        assertEquals(0, boardService.listAllBoards().size());
        String actualId = boardService.createBulletinBoard(id);
        assertEquals(1, boardService.listAllBoards().size());
        assertNotNull(actualId);
        BulletinBoard actualBoard = (BulletinBoard) boardService.listAllBoards().toArray()[0];
        assertEquals(id, actualBoard.getBuilding_id());
    }

    /**
     * Test of addStickerToBoard method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testAddStickerToBoard() {
        System.out.println("addStickerToBoardTest");
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        Sticker sticker = createSticker();
        BulletinBoard actualBoard = boardService.findBoardById(actualId);
        assertFalse(sticker.getBulletin_id() == actualId);
        assertFalse(actualBoard.getStickers().contains(sticker));
        boardService.addStickerToBoard(actualId, sticker);
        assertTrue(sticker.getBulletin_id() == actualId);
        assertTrue(actualBoard.getStickers().contains(sticker));
    }

    /**
     * Test of findStickerById method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testFindStickerById() {
        System.out.println("findStickerByIdTest");
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        Sticker ExpectedSticker = createSticker();
        assertFalse(boardService.findBoardById(actualId).getStickers().contains(ExpectedSticker));
        Sticker noSticker = boardService.findStickerById(actualId, ExpectedSticker.getId());
        assertNull(noSticker);
        boardService.addStickerToBoard(actualId, ExpectedSticker);
        Sticker actualSticker = boardService.findStickerById(actualId, ExpectedSticker.getId());
        assertEquals(ExpectedSticker.getId(), actualSticker.getId());
        assertEquals(ExpectedSticker.getBulletin_id(), actualSticker.getBulletin_id());
    }

    /**
     * Test of findAllStickers method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testFindAllStickers() {
        System.out.println("findAllStickersTest");
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        Sticker ExpectedSticker = createSticker();
        Sticker ExpectedSticker2 = createSticker();
        Sticker ExpectedSticker3 = createSticker();
        assertEquals(0, boardService.findBoardById(actualId).getStickers().size());
        boardService.addStickerToBoard(actualId, ExpectedSticker);
        boardService.addStickerToBoard(actualId, ExpectedSticker2);
        assertEquals(2, boardService.findBoardById(actualId).getStickers().size());
    }

    /**
     * Test of removeStickerFromBoard method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testRemoveStickerFromBoard() {
        System.out.println("removeStickerFromBoardTest");
        Sticker expectedSticker = createSticker();
        String actualId = boardService.createBulletinBoard(expectedSticker.getBulletin_id());
        assertFalse(boardService.findBoardById(actualId).getStickers().contains(expectedSticker));
        boardService.addStickerToBoard(actualId, expectedSticker);
        assertTrue(boardService.findBoardById(actualId).getStickers().contains(expectedSticker));
        boardService.removeStickerFromBoard(expectedSticker);
        assertFalse(boardService.findBoardById(actualId).getStickers().contains(expectedSticker));
        //sticker should be deleted or not?
    }

    /**
     * Test of listAllBoards method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testListAllBoards() {
        System.out.println("listAllBoardsTest");
        assertEquals(0, boardService.listAllBoards().size());
        String id = createUniqueId();
        String id2 = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        String actualId2 = boardService.createBulletinBoard(id2);
        assertEquals(2, boardService.listAllBoards().size());
        boardService.removeBoardById(actualId);
        boardService.removeBoardById(actualId2);
        assertEquals(0, boardService.listAllBoards().size());
    }

    /**
     * Test of findBoardById method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testFindBoardById() {
        System.out.println("findBoardByIdTest");
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        BulletinBoard expectedBoard = boardService.findBoardById(actualId);
        assertNotNull(expectedBoard);
    }

    /**
     * Test of removeBoardById method, of class BulletinBoardServiceImpl.
     */
    @Test
    public void testRemoveBoardById() {
        System.out.println("removeBoardByIdTest");
        assertEquals(0, boardService.listAllBoards().size());
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        assertEquals(1, boardService.listAllBoards().size());
        boardService.removeBoardById(actualId);
        assertEquals(0, boardService.listAllBoards().size());
    }

    /**
     * Test of removeAllStickersFromBoard method, of class
     * BulletinBoardServiceImpl.
     */
    @Test
    public void testRemoveAllStickersFromBoard() {
        System.out.println("removeAllStickersFromBoardTest");
        String id = createUniqueId();
        String actualId = boardService.createBulletinBoard(id);
        Sticker ExpectedSticker = createSticker();
        Sticker ExpectedSticker2 = createSticker();
        assertEquals(0, boardService.findBoardById(actualId).getStickers().size());
        boardService.addStickerToBoard(actualId, ExpectedSticker);
        boardService.addStickerToBoard(actualId, ExpectedSticker2);
        assertEquals(2, boardService.findBoardById(actualId).getStickers().size());
        boardService.removeAllStickersFromBoard(actualId);
        assertEquals(0, boardService.findAllStickers(actualId).size());

    }

    private String createUniqueId() {
        return UUID.randomUUID().toString();
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
