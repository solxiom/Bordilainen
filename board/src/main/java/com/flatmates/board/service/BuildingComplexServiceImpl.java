package com.flatmates.board.service;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import com.flatmates.board.domain.service.BuildingComplexService;
import java.util.Collection;
import java.util.UUID;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class BuildingComplexServiceImpl implements BuildingComplexService {

    @Autowired
    BuildingComplexRepository repo;

    @Override
    public String createBuildingComplex(String address) {
        /*
         * check for "new building" already exists in DB must be done here
         */
        BuildingComplex building = new BuildingComplex();
        building.setAddress(address);
        building.setId(UUID.randomUUID().toString());
        if(repo == null){
               System.out.println("repo is null");
        }
        repo.saveBuildingComplex(building);
        return building.getId();
    }

    @Override
    public void deleteBuildingComplex(BuildingComplex buildingComplex) {
        repo.removeBuildingComplex(buildingComplex);
    }

    @Override
    public Collection<BuildingComplex> queryByAddress(String address) {
        return repo.queryByAddress(address);
    }

    @Override
    public void updateBuildingComplexAddress(String building_id, String address) {
        repo.updateBuildingComplexAddress(building_id, address);

    }

    @Override
    public Collection<BuildingComplex> listAll() {
        return repo.listAll();
    }
}
