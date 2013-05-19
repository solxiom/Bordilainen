package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import java.util.Collection;
import java.util.UUID;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * @author bakharzy
 */
public class BuildingComplexRepositoryTest {

    BuildingComplexRepository buildingRepo = new SimpleBuildingComplexRepository();

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void testSaveBuildingComplexCaseCheckBuildingHasAddedSuccessfully() {
        System.out.println("SaveBuildingComplexCaseCheckBuildingHasAddedSuccessfullyTest");
        BuildingComplex expected = createBuildingComplex();
        String buildingId = buildingRepo.saveBuildingComplex(expected);
        assertEquals(false, buildingId.contains("Building already exist!"));
        assertEquals(1, buildingRepo.listAll().size());
        BuildingComplex actual = buildingRepo.findById(buildingId);
        assertEquals(expected.getAddress(), actual.getAddress());
        assertEquals(expected.getId(), actual.getId());
        assertNotNull(actual.getId());
    }

    @Test
    public void testSaveBuildingComplexCaseBuilingWithExistingBuildingAddressMustNotAdd() {
        System.out.println("SaveBuildingComplexCaseBuilingWithExistingBuildingAddressMustNotAddTest");
        BuildingComplex expected = createBuildingComplex();
        String building_Id1 = buildingRepo.saveBuildingComplex(expected);
        BuildingComplex expected2 = createBuildingComplex();
        expected2.setAddress(expected.getAddress());
        String building_id2 = buildingRepo.saveBuildingComplex(expected2);
        assertEquals(true, building_id2.contains("Building already exist!"));
        assertEquals(1, buildingRepo.listAll().size());
    }

    @Test
    public void testRemoveBuildingComplex() {
        System.out.println("RemoveBuildingComplexTest");
        BuildingComplex expected = createBuildingComplex();
        assertNull(buildingRepo.removeBuildingComplex(expected));
        String buildingId = buildingRepo.saveBuildingComplex(expected);
        BuildingComplex actual = buildingRepo.findById(buildingId);
        assertNotNull(actual.getId());
        assertEquals(buildingId, buildingRepo.removeBuildingComplex(actual));
        assertNull(buildingRepo.findById(buildingId));
    }

    @Test
    public void testQueryByAddress() {
        System.out.println("QueryByAddressTest");
        BuildingComplex expected = createBuildingComplex();
        BuildingComplex expected2 = createBuildingComplex();
        String building_Id1 = buildingRepo.saveBuildingComplex(expected);
        String building_id2 = buildingRepo.saveBuildingComplex(expected2);
        Collection<BuildingComplex> actualList = buildingRepo.queryByAddress(expected.getAddress());
        assertFalse(actualList.size() > 1);
        BuildingComplex actual = (BuildingComplex) actualList.toArray()[0];
        assertEquals(expected.getAddress(), actual.getAddress());
        assertEquals(expected.getId(), actual.getId());
    }

    @Test
    public void testFindById() {
        System.out.println("FindByIdTest");
        BuildingComplex expected = createBuildingComplex();
        String buildingId = buildingRepo.saveBuildingComplex(expected);
        BuildingComplex actual = buildingRepo.findById(buildingId);
        assertNotNull(actual.getId());
        assertEquals(expected.getId(), actual.getId());
        assertEquals(expected.getAddress(), actual.getAddress());
        buildingRepo.removeBuildingComplex(actual);
        assertNull(buildingRepo.findById(buildingId));
    }

    @Test
    public void testUpdateBuildingComplexAddressCaseUpdateWasSuccessful() {
        System.out.println("UpdateBuildingComplexAddressCaseUpdateWasSuccessfulTest");
        BuildingComplex expected1 = createBuildingComplex();
        String newAddress = "new address";
        String building_id = buildingRepo.saveBuildingComplex(expected1);
        BuildingComplex expected2 = createBuildingComplex();
        String building_Id2 = buildingRepo.saveBuildingComplex(expected2);
        String oldAddress = expected2.getAddress();
        buildingRepo.updateBuildingComplexAddress(building_Id2, newAddress);
        BuildingComplex actual = buildingRepo.findById(building_Id2);
        assertEquals("new address", actual.getAddress());
        assertNotSame(oldAddress, actual.getAddress());
    }

    @Test
    public void testUpdateBuildingComplexAddressCaseNewAddressDoesNotExists() {
        System.out.println("UpdateBuildingComplexAddressCaseNewAddressDoesNotExistsTest");
        int cntr = 0;
        BuildingComplex expected1 = createBuildingComplex();
        String newAddress = "new address";
        String building_id = buildingRepo.saveBuildingComplex(expected1);
        BuildingComplex expected2 = createBuildingComplex();
        String building_Id2 = buildingRepo.saveBuildingComplex(expected2);
        String oldAddress = expected2.getAddress();
        buildingRepo.updateBuildingComplexAddress(building_Id2, newAddress);
        for (BuildingComplex bc : buildingRepo.listAll()) {
            if (bc.getAddress().contains(newAddress)) {
                cntr++;
            }
        }
        assertTrue(cntr == 1);
    }

    @Test
    public void testListAll() {
        System.out.println("ListAllTest");
        assertEquals(0, buildingRepo.listAll().size());
        BuildingComplex expected = createBuildingComplex();
        BuildingComplex expected2 = createBuildingComplex();
        expected2.setAddress("ida 2");
        String building_id = buildingRepo.saveBuildingComplex(expected);
        String building_Id2 = buildingRepo.saveBuildingComplex(expected2);
        Collection<BuildingComplex> actualList = buildingRepo.listAll();
        assertEquals(2, actualList.size());
    }

    @Test
    public void testRemoveAll() {
        System.out.println("RemoveAllTest");
        BuildingComplex expected = createBuildingComplex();
        String buildingId = buildingRepo.saveBuildingComplex(expected);
        Collection<BuildingComplex> actualList = buildingRepo.listAll();
        assertEquals(1, actualList.size());
        buildingRepo.removeAll();
        actualList = buildingRepo.listAll();
        assertEquals(0, actualList.size());
    }

    private BuildingComplex createBuildingComplex() {
        BuildingComplex building = new BuildingComplex();
        building.setAddress(UUID.randomUUID().toString());
        return building;
    }
}
