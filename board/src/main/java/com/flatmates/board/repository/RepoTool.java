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
 * @author kavan soleimanbeigi
 */
public class RepoTool {

    public static Collection<BuildingComplex> BUILDING_REPO = new LinkedList<BuildingComplex>();
    public static Collection<Sticker> STICKER_REPO = new LinkedList<Sticker>();
    public static Collection<BulletinBoard> BOARD_REPO = new LinkedList<BulletinBoard>();
    public static Collection<Comment> COMMENT_REPO = new LinkedList<Comment>();
    public static Collection<StickerType> STICKER_TYPE_REPO = new LinkedList<StickerType>();

    public static boolean buildingExistInRepo(BuildingComplex building, BuildingComplexRepository repo) {
        Collection<BuildingComplex> buildings = repo.listAll();
        for (BuildingComplex b : buildings) {
            if (b.getAddress().equalsIgnoreCase(building.getAddress())
                    || b.getId().equalsIgnoreCase(building.getId())) {
                return true;
            }
        }
        return false;
    }

    public static boolean addressExistForOtherBuildingObject(String address,
            String exclude__building_id, Collection<BuildingComplex> buildings) {
        for (BuildingComplex b : buildings) {
            if (b.getId() != exclude__building_id && b.getAddress().equalsIgnoreCase(address)) {
                return true;
            }
        }
        return false;
    }

    public static boolean otherBoardHasSameBuildingId(String building_id,
            String exclude_board_id, Collection<BulletinBoard> boards) {
        for (BulletinBoard board : boards) {
            if (board.getId() != exclude_board_id && board.getBuilding_id().equalsIgnoreCase(building_id)) {
                return true;
            }
        }
        return false;
    }
    public static boolean isStickerAuthenticationDataOk(Sticker sticker){
        if( (sticker.getEmail() != null && !sticker.getEmail().equalsIgnoreCase(""))
                && ( sticker.getPassword() != null && !sticker.getPassword().equalsIgnoreCase("") )){
            return true;
        }
        return false;
    }
    public static boolean stickerIdExistInRepo(String id, Collection<Sticker> stickers){
        for(Sticker s : stickers){
            if(s.getId().equalsIgnoreCase(id)){
                return true;
                
            }
        }
        return false;
    }
}
