package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import java.util.Collection;
import java.util.LinkedList;
import java.util.UUID;
import org.springframework.stereotype.Repository;

@Repository
public class SimpleBuildingComplexRepository implements BuildingComplexRepository {

    Collection<BuildingComplex> buildingComplexManager = new LinkedList<BuildingComplex>();
//    Collection<BuildingComplex> buildingComplexManager = RepoTool.BUILDING_REPO;

    /**
     * Method returns the Id of the buildingComplex object which has been
     * successfully saved in list of buildings.Before adding the building to the
     * list, a unique Id is set for the object and the method checks if the
     * building already exists or not.
     *
     * @param building
     * @return Building Id if building is saved successfully and if the saving
     * was not successful, the method will return a message ("Building already
     * exist!").
     *
     */
    @Override
    public String saveBuildingComplex(BuildingComplex building) {

        building.setId(UUID.randomUUID().toString().replace('-', 'x'));
        if (!RepoTool.buildingExistInRepo(building, this)) {
            buildingComplexManager.add(building);
            return building.getId();
        }
        return "Building already exist!";

    }

    /**
     * This method removes the buildingcomplex object which is received as
     * parameter and returns the id of the removed object.
     *
     * @param buildingComplex
     * @return id of the removed buildingComplex object
     */
    @Override
    public String removeBuildingComplex(BuildingComplex buildingComplex) {
        buildingComplexManager.remove(buildingComplex);
        return buildingComplex.getId();

    }

    /**
     * The method returns a collection of buildingComplex objects (should
     * contain only one object) which their address are the same as the
     * parameter given to the method.
     *
     * @param address
     * @return a list of buildingComplex objects which their address matches the
     * address param.
     */
    @Override
    public Collection<BuildingComplex> queryByAddress(String address) {
        Collection<BuildingComplex> list = new LinkedList<BuildingComplex>();
        for (BuildingComplex bc : buildingComplexManager) {
            if (bc.getAddress().equalsIgnoreCase(address)) {
                list.add(bc);
            }
        }
        return list;
    }

    /**
     * The method finds buildingComplex objects which has the same id as its
     * param.
     *
     * @param id
     * @return buildingComplex objects
     */
    @Override
    public BuildingComplex findById(String id) {
        for (BuildingComplex bc : buildingComplexManager) {
            if (bc.getId().equalsIgnoreCase(id)) {
                return bc;
            }
        }
        return null;
    }

    /**
     * The method change the address of the buildingComplex objects which has
     * the same id as building_id param to the new address param given to the
     * method. It checks if the new address does not already exists for other
     * buildingComplex objects.
     *
     * @param building_id
     * @param address
     * @return true if the update is successful and false if the update was not
     * successful.
     */
    @Override
    public boolean updateBuildingComplexAddress(String building_id, String address) {

        boolean found = false;
        if (RepoTool.addressExistForOtherBuildingObject(address, building_id, buildingComplexManager)) {
            return false;
        }
        for (BuildingComplex bc : buildingComplexManager) {
            if (bc.getId().equalsIgnoreCase(building_id)) {
                bc.setAddress(address);
                found = true;
            }
        }
        return found;
    }

    /**
     * The method returns a list of the all buildingComplex objects
     *
     * @return list of the all buildingComplex objects saved in the memory
     */
    @Override
    public Collection<BuildingComplex> listAll() {
        return buildingComplexManager;
    }

    /**
     * The method removes all the buildingComplex objects from the memory.
     *
     */
    @Override
    public void removeAll() {
        buildingComplexManager.clear();

    }
}
