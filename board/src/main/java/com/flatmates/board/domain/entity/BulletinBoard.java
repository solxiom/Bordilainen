package com.flatmates.board.domain.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
/**
 *
 * @author kavan soleimanbeigi
 */
@Document
public class BulletinBoard {

	@Id 
	private String id;
//	@NotNull
	private String building_id;	
	
	private Collection<Sticker> stickers = Collections.checkedCollection(new ArrayList<Sticker>(), Sticker.class);
		
	public void addSticker(Sticker sticker){
		this.stickers.add(sticker);
	}
	
	public Collection<Sticker> getStickers(){
		return this.stickers;
	}
	
	public void setStickers(Collection<Sticker> stickers){
		this.stickers = stickers;
	}
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getBuilding_id() {
		return building_id;
	}

	public void setBuilding_id(String building_id) {
		this.building_id = building_id;
	}
	
	
	
}
