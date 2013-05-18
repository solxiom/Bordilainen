/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.entity.BulletinBoard;
import com.flatmates.board.domain.entity.Comment;
import com.flatmates.board.domain.entity.Sticker;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.domain.service.BulletinBoardService;
import java.util.Collection;
import java.util.LinkedList;
import org.springframework.web.context.request.WebRequest;

/**
 *
 * @author kavansol
 */
public class ControlTool {

    public static String findBoardIdByBuilding(Collection<BulletinBoard> boards, String building_id) {
        for (BulletinBoard board : boards) {
            if (board.getBuilding_id().equalsIgnoreCase(building_id)) {
                return board.getId();
            }
        }
        return null;
    }
    public static void clearAuthenticationDataFromStickers(Collection<Sticker> sts){
        
        for(Sticker st: sts){
            st.setEmail("secured");
            st.setPassword("secured");
        }
    }
    public static void putFakeStickersToService(BulletinBoardService service,
             String board_id){
        Collection<Sticker> sts = new LinkedList<Sticker>();
        addFewFakeStickerToTheCollection(sts);
        for(Sticker st :sts){
            service.addStickerToBoard(board_id, st);
          
        }
    }
    public static void putFakeBuildingsToService(BuildingComplexService service){
        Collection<BuildingComplex> buildings = new LinkedList<BuildingComplex>();
        addFewBuildingToTheCollection(buildings);
        for(BuildingComplex bc: buildings){
            service.createBuildingComplex(bc);
        }
    }
    public static void checkAndFillSticker(Collection<String> log, WebRequest request, Sticker sticker) {
        if (request.getParameter("email") != null) {
            sticker.setEmail(request.getParameter("email"));
        } else {
            log.add("email must not be null");
        }
        if (request.getParameter("password") != null) {
            sticker.setPassword(request.getParameter("passwod"));
        } else {
            log.add("password must not be null");
        }
        if (request.getParameter("summary") != null) {
            sticker.setSummary(request.getParameter("summary"));
        } else {
            //summary can be null!!
        }
        if (request.getParameter("title") != null) {
            sticker.setTitle(request.getParameter("title"));
        } else {
            log.add("title must not be null");
        }
        if (request.getParameter("description") != null) {
            sticker.setDescription(request.getParameter("description"));
        } else {
            log.add("description must not be null");
        }
        if (request.getParameter("type_id") != null) {
            sticker.setType_Id(request.getParameter("type_id"));
        } else {
            log.add("type_id must not be null");
        }
    }

    public static boolean setAndSaveBuilding(BuildingComplexService buildingService, BulletinBoardService boardService, String address) {
        try {
            BuildingComplex building = new BuildingComplex();
            building.setAddress(address);
            String building_id = buildingService.createBuildingComplex(building);
            BulletinBoard board = new BulletinBoard();
            boardService.createBulletinBoard(building_id);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public static void checkAndFillComment(Collection<String> log, WebRequest request, Comment comment) {
        if (request.getParameter("commentor_name") != null) {
            comment.setCommentor_name(request.getParameter("commentor_name"));
        } else {
            log.add("commentor must not be null");
        }
        if (request.getParameter("commentor_text") != null) {
            comment.setComment_text(request.getParameter("commentor_text"));
        } else {
            log.add("comment text must not be null");
        }
    }    
    private static void addFewBuildingToTheCollection(Collection<BuildingComplex> col) {
        BuildingComplex nx1 = new BuildingComplex();
        nx1.setAddress("Juhana herttuan tie 3");
        col.add(nx1);
        BuildingComplex nx2 = new BuildingComplex();
        nx2.setAddress("Ida Aalbergin tie 1");
        col.add(nx2);
        BuildingComplex nx3 = new BuildingComplex();
        nx3.setAddress("Väinö Auerin katu 1");
        col.add(nx3);

    }
    private static void addFewFakeStickerToTheCollection(Collection<Sticker> col){
        for(int i = 0; i < 10; i++){
            Sticker st = new Sticker();
            st.setDescription("bal vava bnja b abb  babj bja a bjba bjab bbajsgh basja a djk");
            st.setTitle("tit titi tit ti");
            st.setSummary("this is very good summary of my sticker");
            st.setEmail("emad@email.com");
            st.setPassword("koskhobe");
            st.setId("sample-id-"+i);
            st.setType_Id("sample-type-id"+i);
            col.add(st);
        }
    }
    
}
