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
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author kavan soleimanbeigi
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

    public static List<Sticker> clearAuthenticationDataFromStickers(Collection<Sticker> sts) {
        List<Sticker> destList = new ArrayList<Sticker>();            
        for (Sticker st : sts) {
            Sticker new_st = copySticker(st);
            new_st.setEmail("secured");
            new_st.setPassword("secured");
            destList.add(new_st);
        }
        return destList;
    }

    public static void putFakeStickersToService(BulletinBoardService service,
            String board_id) {
        Collection<Sticker> sts = new LinkedList<Sticker>();
        addFewFakeStickerToTheCollection(sts);
        for (Sticker st : sts) {
            service.addStickerToBoard(board_id, st);

        }
    }

    public static void putFakeBuildingsToService(BuildingComplexService service) {
        Collection<BuildingComplex> buildings = new LinkedList<BuildingComplex>();
        addFewBuildingToTheCollection(buildings);
        for (BuildingComplex bc : buildings) {
            service.createBuildingComplex(bc);
        }
    }

    public static boolean checkRequestSticker(Collection<String> log, Sticker req_stickers) {


        if (req_stickers.getEmail() == null || req_stickers.getEmail().equalsIgnoreCase("")) {
            log.add("email must not be null or empty");

        }
        if (req_stickers.getPassword() == null || req_stickers.getPassword().equalsIgnoreCase("")) {
            log.add("password must not be null or empty");
        }
        if (req_stickers.getTitle() == null || req_stickers.getTitle().equalsIgnoreCase("")) {
            log.add("title must not be null or empty");
        }
        if (req_stickers.getDescription() == null || req_stickers.getDescription().equalsIgnoreCase("")) {
            log.add("description must not be null or empty");
        }
        if (req_stickers.getType_Id() == null || req_stickers.getType_Id().equalsIgnoreCase("")) {
            log.add("type_id must not be null or empty");
        }
        if (log.size() > 0) {
            return false;
        }
        return true;
    }

    public static boolean checkAndSaveNewBuilding(BuildingComplexService buildingService, BulletinBoardService boardService, String address) {
        try {
            BuildingComplex building = new BuildingComplex();
            building.setAddress(address);
            String building_id;
            if ((building_id = buildingService.createBuildingComplex(building)) == null) {
                return false;
            }
            BulletinBoard board = new BulletinBoard();
            boardService.createBulletinBoard(building_id);
        } catch (Exception ex) {
            return false;
        }
        return true;
    }

    public static void checkRequestComment(Collection<String> log, Comment req_comment) {
        if (req_comment.getCommentor_name() == null
                || req_comment.getCommentor_name().equalsIgnoreCase("")) {
            log.add("commentor must not be null");
        }
        if (req_comment.getComment_text() == null
                || req_comment.getComment_text().equalsIgnoreCase("")) {
            log.add("comment text must not be null");
        }
    }

    public static boolean stickerAuthenticationCheck(Collection<String> log, Sticker sticker, String[] auth) {
        try {
            String email = auth[0], password = auth[1];
            if (sticker.getEmail().equalsIgnoreCase(email)
                    && sticker.getPassword().equalsIgnoreCase(password)) {
                return true;
            }
        } catch (Exception e) {
            log.add("authentication failed");
        }
        return false;
    }
    public static Sticker copySticker(Sticker actual){
        Sticker cp = new Sticker();
        cp.setId(actual.getId());
        cp.setBulletin_id(actual.getBulletin_id());
        cp.setEmail(actual.getEmail());
        cp.setExpiration_date(actual.getExpiration_date());
        cp.setPassword(actual.getPassword());
        cp.setTitle(actual.getTitle());
        cp.setDescription(actual.getDescription());
        cp.setType_Id(actual.getType_Id());
        cp.setReportCount(actual.getReportCount());
        cp.setSummary(actual.getSummary());
        return cp;
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

    private static void addFewFakeStickerToTheCollection(Collection<Sticker> col) {
        for (int i = 0; i < 10; i++) {
            Sticker st = new Sticker();
            st.setDescription("bal vava bnja b abb  babj bja a bjba bjab bbajsgh basja a djk");
            st.setTitle("tit titi tit ti");
            st.setSummary("this is very good summary of my sticker");
            st.setEmail("emad@emi.com");
            st.setPassword("123");
            st.setId("sample-id-" + i);
            st.setType_Id("sample-type-id" + i);
            col.add(st);
        }
    }
    
}
