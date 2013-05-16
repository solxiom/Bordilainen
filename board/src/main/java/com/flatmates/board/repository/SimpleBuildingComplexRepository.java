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
	Collection<BulletinBoard> bulletinBoardManager = new LinkedList<BulletinBoard>();
	Collection<Sticker> stickerManager = new LinkedList<Sticker>();
	Collection<Comment> commentManager = new LinkedList<Comment>();
	
	@Override
	public String saveBuildingComplex(BuildingComplex building) {
		
		building.setId(UUID.randomUUID().toString());
		buildingComplexManager.add(building);
		return building.getId();
	}

	@Override
	public void removeBuildingComplex(BuildingComplex buildingComplex) {
		String bbToDelete = "";
		for(BulletinBoard bb : bulletinBoardManager){
			if(bb.getBuilding_id().equalsIgnoreCase(buildingComplex.getId())){
				bbToDelete = bb.getId();
				bulletinBoardManager.remove(bb);
			}
		}
		Collection<String> stickerIdsToDelete = new LinkedList<String>();
		for(Sticker sticker : stickerManager){
			if(sticker.getBulletin_id().equalsIgnoreCase(bbToDelete)){
				stickerIdsToDelete.add(sticker.getId());
				stickerManager.remove(sticker);
			}
		}
		for(Comment cm : commentManager){
			if(stickerIdsToDelete.contains(cm.getSticker_id())){
				commentManager.remove(cm);
			}
		}
		buildingComplexManager.remove(buildingComplex);
		
	}

	@Override
	public Collection<BuildingComplex> queryByAddress(String address) {
		Collection<BuildingComplex> list = new LinkedList<BuildingComplex>();
		for(BuildingComplex bc : buildingComplexManager ){
			if(bc.getAddress().equalsIgnoreCase(address)){
				list.add(bc);
			}
		}
		return list;
	}

	@Override
	public BuildingComplex findById(String id) {
		for(BuildingComplex bc : buildingComplexManager ){
			if(bc.getId().equalsIgnoreCase(id)){ 
					return bc;
			}
		}
		return null;
	}

	@Override
	public void updateBuildingComplexAddress(String building_id, String address) {
		for(BuildingComplex bc : buildingComplexManager ){
			if(bc.getId().equalsIgnoreCase(building_id)){
				bc.setAddress(address);
			}
		}
	}

	@Override
	public Collection<BuildingComplex> listAll() {
		return buildingComplexManager;
	}

	@Override
	public void removeAll() {
		buildingComplexManager.clear();

	}

}
