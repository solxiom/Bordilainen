package com.flatmates.board.domain.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import java.util.Collection;
/**
 *
 * @author kavan soleimanbeigi
 */

public interface BuildingComplexRepository {

		String saveBuildingComplex(BuildingComplex building);
		
		String removeBuildingComplex(BuildingComplex buildingComplex);
		
		Collection<BuildingComplex> queryByAddress(String address);
		
		BuildingComplex findById(String id);
		
		boolean updateBuildingComplexAddress(String building_id, String address);
		
		Collection<BuildingComplex> listAll();
		
		void removeAll();
}
