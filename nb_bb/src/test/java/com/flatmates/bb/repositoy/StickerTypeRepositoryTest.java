package com.flatmates.bb.repositoy;

import com.flatmates.bb.domain.entity.StickerType;
import com.flatmates.bb.domain.repository.StickerTypeRepository;
import static org.junit.Assert.assertEquals;

import java.util.Collection;
import java.util.LinkedList;

import org.junit.Before;
import org.junit.Test;


public class StickerTypeRepositoryTest {

	StickerTypeRepository stickerTypeRepo = new SimpleStickerTypeRepository();
	@Before
	public void setUp() throws Exception {
	}
	@Test
	public void testSaveStickerType() {
		String expectedName = "";
		StickerType expected = createStickerType();
		String id = stickerTypeRepo.saveStickerType(expected);
		for(StickerType st : stickerTypeRepo.findAll()){
			if(st.getId().equalsIgnoreCase(id))
				expectedName = st.getName();
		}
		assertEquals("buy",expectedName);
	}

	@Test
	public void testRemoveStickerType() {
		StickerType expected = createStickerType();
		String id = stickerTypeRepo.saveStickerType(expected);
		Collection<StickerType> list = new LinkedList<StickerType>();
		list = stickerTypeRepo.findAll();
		assertEquals(1,list.size());
		stickerTypeRepo.removeStickerType((StickerType)list.toArray()[0]);
		list = stickerTypeRepo.findAll();
		assertEquals(0,list.size());
	}

	@Test
	public void testFindAll() {
		StickerType expected = createStickerType();
		StickerType expected2 = createStickerType();
		String id = stickerTypeRepo.saveStickerType(expected);
		String id2 = stickerTypeRepo.saveStickerType(expected2);
		Collection<StickerType> list = new LinkedList<StickerType>();
		list = stickerTypeRepo.findAll();
		assertEquals(2,list.size());
	}
	private StickerType createStickerType(){
		StickerType newType = new StickerType();
		newType.setName("buy");
		return newType;
	}
}
