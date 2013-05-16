package com.flatmates.board.domain.service;

import com.flatmates.board.domain.entity.BuildingComplex;
import java.util.Collection;



public interface BuildingComplexService {

		String createBuildingComplex(BuildingComplex building);
		
		void removeBuildingComplex(BuildingComplex buildingComplex);
                
                BuildingComplex findBuildingById(String building_id);
		
		Collection<BuildingComplex> queryByAddress(String address);
		
		void updateBuildingComplexAddress(String building_id,String address);
		
		Collection<BuildingComplex> listAll();
                
                void removeAllBuildingComplexes();
}
