/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import java.util.Collection;

/**
 *
 * @author kavansol
 */
public class RepoTool {
 
    public static boolean buildingExistInRepo(BuildingComplex building,BuildingComplexRepository repo){
        Collection<BuildingComplex> buildings = repo.listAll();
        for(BuildingComplex b : buildings){
            if(b.getAddress().equalsIgnoreCase(building.getAddress())){
                return true;
            }
        }
        return false;
    }
}
