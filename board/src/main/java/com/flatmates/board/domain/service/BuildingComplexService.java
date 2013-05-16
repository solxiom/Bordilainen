package com.flatmates.board.domain.service;

import com.flatmates.board.domain.entity.BuildingComplex;
import java.util.Collection;



public interface BuildingComplexService {

		String createBuildingComplex(String address);
		
		void deleteBuildingComplex(BuildingComplex buildingComplex);
		
		Collection<BuildingComplex> queryByAddress(String address);
		
		void updateBuildingComplexAddress(String building_id,String address);
		
		Collection<BuildingComplex> listAll();
}