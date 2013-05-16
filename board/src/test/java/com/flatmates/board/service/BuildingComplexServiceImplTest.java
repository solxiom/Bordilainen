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

//    @Test
//    public void testDeleteBuildingComplex() {
//        System.out.println("removeBuildingComplex");
//        BuildingComplex buildingComplex = null;
//        BuildingComplexServiceImpl instance = new BuildingComplexServiceImpl();
//        instance.removeBuildingComplex(buildingComplex);
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
    
    private BuildingComplex makeFakeBuildingComplex(String address){
        BuildingComplex building = new BuildingComplex();
        building.setAddress(address);
        
        return building;
    }
}
