package com.flatmates.board.domain.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import java.util.Collection;


public interface BuildingComplexRepository {

		String saveBuildingComplex(BuildingComplex building);
		
		void removeBuildingComplex(BuildingComplex buildingComplex);
		
		Collection<BuildingComplex> queryByAddress(String address);
		
		BuildingComplex findById(String id);
		
		void updateBuildingComplexAddress(String building_id, String address);
		
		Collection<BuildingComplex> listAll();
		
		void removeAll();
}
