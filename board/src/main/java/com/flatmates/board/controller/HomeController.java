package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.domain.service.BulletinBoardService;
import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author kavan soleimanbeigi
 */
@Controller
public class HomeController {

    @Autowired
    BuildingComplexService buildingService;
    @Autowired
    BulletinBoardService boardService;
    String glob_board_id = "";
    boolean init_state = true;

    @RequestMapping(value = "/")
    public ModelAndView rootIndex(HttpServletResponse response) throws IOException {
        if (init_state) {
            init();
            init_state = false;
        }
        response.addHeader("Access-Control-Allow-Origin", "*");
        return new ModelAndView("home.jsp");
    }
    @RequestMapping(value = "/view/building/{building_id}")
    public ModelAndView viewBuildingIndex(HttpServletResponse response) throws IOException {
        if (init_state) {
            init();
            init_state = false;
        }
        response.addHeader("Access-Control-Allow-Origin", "*");
        return new ModelAndView("home.jsp");
    }
    @RequestMapping(value = "/address/{building_id}", method = RequestMethod.GET)
    public @ResponseBody
    String getBuildingAddress(@PathVariable String building_id, HttpServletResponse response) {
        BuildingComplex building = buildingService.findBuildingById(building_id);
        String building_address = "buildingComplex not found!";
        if (building != null) {
            building_address = building.getAddress();
        }

        response.addHeader("Access-Control-Allow-Origin", "*");
        return building_address;
    }

    private void init() {
        ControlTool.putFakeBuildingsToService(buildingService);
        BuildingComplex testbuilding = (BuildingComplex) (buildingService.listAll().toArray()[0]);
        BuildingComplex testbuilding2 = (BuildingComplex) (buildingService.listAll().toArray()[1]);
        BuildingComplex testbuilding3 = (BuildingComplex) (buildingService.listAll().toArray()[2]);
        String testBoardId = boardService.createBulletinBoard(testbuilding.getId());
        String testBoardId2 = boardService.createBulletinBoard(testbuilding2.getId());
        String testBoardId3 = boardService.createBulletinBoard(testbuilding3.getId());
//        ControlTool.putFakeStickersToService(boardService, testBoardId);
        glob_board_id = testBoardId;
    }
}
