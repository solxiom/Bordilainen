/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.service;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.repository.SimpleBuildingComplexRepository;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author bakharzy
 */
public class BuildingComplexServiceImplTest {
//    @Autowired

    BuildingComplexService buildingService;

    public BuildingComplexServiceImplTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
        buildingService = new BuildingComplexServiceImpl(new SimpleBuildingComplexRepository());
    }

    @After
    public void tearDown() {
    }

    /**
     * Test of createBuildingComplex method, of class
     * BuildingComplexServiceImpl.
     */
    @Test
    public void testCreateBuildingComplex() {
        System.out.println("createBuildingComplexTest");
        String address = "ida albegin tie 1";
        buildingService.removeAllBuildingComplexes();
        assertTrue(buildingService.listAll().size() == 0);
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        Collection<BuildingComplex> actualList = new LinkedList<BuildingComplex>();
        actualList = buildingService.queryByAddress(address);
        assertTrue(actualList.size() == 1);
    }

    @Test
    public void testDeleteBuildingComplex() {
        System.out.println("removeBuildingComplexTest");
        String address = "ida albegin tie 1";
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        assertEquals(1, buildingService.listAll().size());
        for (BuildingComplex bc : buildingService.listAll()) {
            if (bc.getAddress().equalsIgnoreCase(address)) {
                buildingService.removeBuildingComplex(bc);
            }
        }
        assertEquals(0, buildingService.listAll().size());
    }

    @Test
    public void testQueryByAddress() {
        System.out.println("queryByAddressTest");
        String address = "ida albegin tie 1";
        String address2 = "Exactum";
        assertEquals(0, buildingService.listAll().size());
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        String id2 = buildingService.createBuildingComplex(makeFakeBuildingComplex(address2));
        assertEquals(2, buildingService.listAll().size());
        Collection<BuildingComplex> actualList = new LinkedList<BuildingComplex>();
        actualList = buildingService.queryByAddress(address);
        assertEquals(1, actualList.size());
        BuildingComplex bc = (BuildingComplex) actualList.toArray()[0];
        assertEquals(address, bc.getAddress());
        assertEquals(id, bc.getId());
    }
//
//    /**
//     * Test of updateBuildingComplexAddress method, of class
//     * BuildingComplexServiceImpl.
//     */

    @Test
    public void testUpdateBuildingComplexAddress() {
        System.out.println("updateBuildingComplexAddressTest");
        String address = "ida albegin tie 1";
        String address2 = "Exactum";
        String expectedAddress = "new address";
        assertEquals(0, buildingService.listAll().size());
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        String id2 = buildingService.createBuildingComplex(makeFakeBuildingComplex(address2));
        assertEquals(2, buildingService.listAll().size());
        buildingService.updateBuildingComplexAddress(id, expectedAddress);
        BuildingComplex bc = (BuildingComplex) buildingService.listAll().toArray()[0];
        BuildingComplex bc2 = (BuildingComplex) buildingService.listAll().toArray()[1];
        assertEquals(expectedAddress, bc.getAddress());
        assertEquals(address2, bc2.getAddress());
        Collection<BuildingComplex> actualList = new LinkedList<BuildingComplex>();
        actualList = buildingService.queryByAddress(address);
        assertEquals(0, actualList.size());
    }
//
//    /**
//     * Test of listAll method, of class BuildingComplexServiceImpl.
//     */

    @Test
    public void testListAll() {
        System.out.println("listAllTest");
        assertEquals(0, buildingService.listAll().size());
        String address = "ida albegin tie 1";
        String address2 = "Exactum";
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        String id2 = buildingService.createBuildingComplex(makeFakeBuildingComplex(address2));
        assertEquals(2, buildingService.listAll().size());
        buildingService.removeAllBuildingComplexes();
        assertEquals(0, buildingService.listAll().size());
    }

    @Test
    public void testRemoveAllBuildingComplexes() {
        System.out.println("RemoveAllBuildingComplexesTest");
        assertEquals(0, buildingService.listAll().size());
        String address = "ida albegin tie 1";
        String address2 = "Exactum";
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        String id2 = buildingService.createBuildingComplex(makeFakeBuildingComplex(address2));
        assertEquals(2, buildingService.listAll().size());
        buildingService.removeAllBuildingComplexes();
        assertEquals(0, buildingService.listAll().size());

    }

    @Test
    public void testFindBuildingById() {
        System.out.println("FindBuildingByIdTest");
        String address = "ida albegin tie 1";
        String address2 = "Exactum";
        String id = buildingService.createBuildingComplex(makeFakeBuildingComplex(address));
        String id2 = buildingService.createBuildingComplex(makeFakeBuildingComplex(address2));
        BuildingComplex actual = buildingService.findBuildingById(id);
        assertEquals(address, actual.getAddress());
        assertFalse(actual.getId().equalsIgnoreCase(id2));
        
    }

    private BuildingComplex makeFakeBuildingComplex(String address) {
        BuildingComplex building = new BuildingComplex();
        building.setAddress(address);
        building.setId(UUID.randomUUID().toString());
        return building;
    }
}
