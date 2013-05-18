package com.flatmates.board.controller;

import com.flatmates.board.domain.entity.BuildingComplex;
import com.flatmates.board.domain.service.BuildingComplexService;
import com.flatmates.board.domain.service.BulletinBoardService;
import java.io.IOException;
import java.util.Collection;

import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

    @Autowired
    BuildingComplexService buildingService;
    @Autowired
    BulletinBoardService boardService;
    

    @RequestMapping(value = "/")
    public ModelAndView test(HttpServletResponse response) throws IOException {
        ControlTool.putFakeBuildingsToService(buildingService);
        BuildingComplex testbuilding = (BuildingComplex)(buildingService.listAll().toArray()[1]);
        String testBoardId = boardService.createBulletinBoard(testbuilding.getId());
        ControlTool.putFakeStickersToService(boardService, testBoardId);
        return new ModelAndView("home.jsp");
    }
}
