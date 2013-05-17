/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.service;

import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.entity.StickerType;
import com.flatmates.board.domain.service.StickerTypeService;
import com.flatmates.board.repository.SimpleStickerTypeRepository;
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
public class StickerTypeserviceimplTest {

    StickerTypeService stickerTypeService;

    public StickerTypeserviceimplTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        stickerTypeService = new StickerTypeserviceimpl(new SimpleStickerTypeRepository());
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of saveStickerType method, of class StickerTypeserviceimpl.
     */
    @Test
    public void testSaveStickerType() {
        System.out.println("saveStickerTypeTest");
        String typeName = "sell";
        assertEquals(0, stickerTypeService.findAll().size());
        StickerType expectedStickerType = createStickerType(typeName);
        stickerTypeService.saveStickerType(expectedStickerType);
        assertEquals(1, stickerTypeService.findAll().size());
    }

    /**
     * Test of removeStickerType method, of class StickerTypeserviceimpl.
     */
    @Test
    public void testRemoveStickerType() {
        System.out.println("removeStickerTypeTest");
        String typeName = "buy";
        String typeName2 = "sell";
        assertEquals(0, stickerTypeService.findAll().size());
        StickerType expectedStickerType = createStickerType(typeName);
        StickerType expectedStickerType2 = createStickerType(typeName2);
        stickerTypeService.saveStickerType(expectedStickerType);
        stickerTypeService.saveStickerType(expectedStickerType2);
        assertEquals(2, stickerTypeService.findAll().size());
        stickerTypeService.removeStickerType(expectedStickerType);
        assertEquals(1, stickerTypeService.findAll().size());
        StickerType actualStickerType = (StickerType) stickerTypeService.findAll().toArray()[0];
        assertEquals(expectedStickerType2.getName(), actualStickerType.getName());
    }

    /**
     * Test of findAll method, of class StickerTypeserviceimpl.
     */
    @Test
    public void testFindAll() {
        System.out.println("findAllTest");
        String typeName = "buy";
        String typeName2 = "sell";
        assertEquals(0, stickerTypeService.findAll().size());
        StickerType expectedStickerType = createStickerType(typeName);
        StickerType expectedStickerType2 = createStickerType(typeName2);
        stickerTypeService.saveStickerType(expectedStickerType);
        stickerTypeService.saveStickerType(expectedStickerType2);
        assertEquals(2, stickerTypeService.findAll().size());
        stickerTypeService.removeStickerType(expectedStickerType);
        stickerTypeService.removeStickerType(expectedStickerType2);
        assertEquals(0, stickerTypeService.findAll().size());


    }

    private String createUniqueId() {
        return UUID.randomUUID().toString();
    }

    private StickerType createStickerType(String typeName) {
        StickerType stickerType = new StickerType();
        stickerType.setId(createUniqueId());
        stickerType.setName(typeName);
        return stickerType;
    }
}
