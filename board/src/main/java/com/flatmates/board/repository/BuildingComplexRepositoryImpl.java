package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;


public class BuildingComplexRepositoryImpl implements BuildingComplexRepository{

	@Autowired
	MongoTemplate dbManager;
	
	@Override
	public String saveBuildingComplex(BuildingComplex building) {
		dbManager.save(building);
		return building.getId();
	}

	@Override
	public String removeBuildingComplex(BuildingComplex buildingComplex) {
		dbManager.remove(buildingComplex);
                return buildingComplex.getId();
	}

	@Override
	public Collection<BuildingComplex> queryByAddress(String address) {		
		Query query = new Query(Criteria.where("address").is(address));		
		return dbManager.find(query, BuildingComplex.class);
	}

	@Override
	public boolean updateBuildingComplexAddress(String id,String address) {				
		Query query = new Query(Criteria.where("id").is(id));		
		dbManager.findAndModify(query, Update.update("address", address), BuildingComplex.class);
                return true;
	}

	@Override
	public Collection<BuildingComplex> listAll() {			
		return dbManager.findAll(BuildingComplex.class);
	}

	@Override
	public void removeAll() {
		Collection<BuildingComplex> all = dbManager.findAll(BuildingComplex.class);
		for(BuildingComplex b: all){
			dbManager.remove(b);			
		}		
	}

	@Override
	public BuildingComplex findById(String id) {
		
		return dbManager.findById(new Query(Criteria.where("id").is(id)), BuildingComplex.class); 
	}
	

}
