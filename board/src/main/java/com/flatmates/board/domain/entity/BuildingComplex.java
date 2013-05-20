package com.flatmates.board.domain.entity;
/**
 *
 * @author kavan soleimanbeigi
 */

import org.springframework.data.annotation.Id;

public class BuildingComplex {
	@Id 
	private String id;
	
//	@NotNull
	private String address;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	
}
