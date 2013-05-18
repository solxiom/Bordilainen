/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.repository;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.entity.StickerType;
import com.flatmates.board.domain.repository.BuildingComplexRepository;
import java.util.Collection;
import java.util.LinkedList;

/**
 *
 * @author kavansol
 */
public class RepoTool {
 
    public static Collection<BuildingComplex> BUILDING_REPO = new LinkedList<BuildingComplex>();
    public static Collection<Sticker> STICKER_REPO = new LinkedList<Sticker>();
    public static Collection<BulletinBoard> BOARD_REPO = new LinkedList<BulletinBoard>();
    public static Collection<Comment> COMMENT_REPO = new LinkedList<Comment>();
    public static Collection<StickerType> STICKER_TYPE_REPO = new LinkedList<StickerType>();
    
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
