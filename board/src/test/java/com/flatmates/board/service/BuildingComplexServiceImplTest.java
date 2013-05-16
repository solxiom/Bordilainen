/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.service;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.service.BuildingComplexService;
import java.util.Collection;
import java.util.LinkedList;
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
    @Autowired
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
        String id = buildingService.createBuildingComplex("ida");
        System.out.println("salam");
        Collection<BuildingComplex> actualList = new LinkedList<BuildingComplex>();
        System.out.println("----id: " + id);
        actualList = buildingService.listAll();
        assertFalse(actualList.isEmpty());
    }

//    @Test
//    public void testDeleteBuildingComplex() {
//        System.out.println("deleteBuildingComplex");
//        BuildingComplex buildingComplex = null;
//        BuildingComplexServiceImpl instance = new BuildingComplexServiceImpl();
//        instance.deleteBuildingComplex(buildingComplex);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of queryByAddress method, of class BuildingComplexServiceImpl.
//     */
//    @Test
//    public void testQueryByAddress() {
//        System.out.println("queryByAddress");
//        String address = "";
//        BuildingComplexServiceImpl instance = new BuildingComplexServiceImpl();
//        Collection expResult = null;
//        Collection result = instance.queryByAddress(address);
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of updateBuildingComplexAddress method, of class
//     * BuildingComplexServiceImpl.
//     */
//    @Test
//    public void testUpdateBuildingComplexAddress() {
//        System.out.println("updateBuildingComplexAddress");
//        String building_id = "";
//        String address = "";
//        BuildingComplexServiceImpl instance = new BuildingComplexServiceImpl();
//        instance.updateBuildingComplexAddress(building_id, address);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//    }
//
//    /**
//     * Test of listAll method, of class BuildingComplexServiceImpl.
//     */
//    @Test
//    public void testListAll() {
//        System.out.println("listAll");
//        BuildingComplexServiceImpl instance = new BuildingComplexServiceImpl();
//        Collection expResult = null;
//        Collection result = instance.listAll();
//        assertEquals(expResult, result);
//        // TODO review the generated test code and remove the default call to fail.
//        fail("The test case is a prototype.");
//        
//    }
}
