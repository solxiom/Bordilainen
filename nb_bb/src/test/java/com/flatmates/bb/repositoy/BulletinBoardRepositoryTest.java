package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.BulletinBoard;
import com.flatmates.bb.domain.entity.Sticker;
import com.flatmates.bb.domain.repository.BulletinBoardRepository;
import com.flatmates.bb.repositoy.SimpleBulletinBoardRepository;
import com.flatmates.bb.repositoy.SimpleBulletinBoardRepository;
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
		assertEquals(expected.getBuilding_id(),actual.getBuilding_id());
		assertEquals(expected.getId(),actual.getId());
		assertNotNull(actual.getId());
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
		assertEquals(sticker.getPassword(),actual.getPassword());
		assertEquals(sticker.getBulletin_id(),actual.getBulletin_id());
		
	}
	@Test
	public void testFindAllStickers() {
		BulletinBoard expected = createBulletinBoard();
		Sticker sticker = createSticker();
		Sticker sticker2 = createSticker();
		String id = boardRepo.saveBulletinBoard(expected);
		boardRepo.addStickerToBoard(id, sticker);
		boardRepo.addStickerToBoard(id, sticker2);
		assertEquals(2,boardRepo.findAllStickers(id).size());
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
	private BulletinBoard createBulletinBoard(){
		BulletinBoard board = new BulletinBoard();
		board.setBuilding_id("test building id");
		return board;
	}
	
	private Sticker createSticker(){
		Sticker sticker = new Sticker();
		sticker.setPassword("pass");
		sticker.setBulletin_id("old id");
		return sticker;
	}
}
