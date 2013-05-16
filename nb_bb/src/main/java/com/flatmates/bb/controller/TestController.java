package com.flatmates.bb.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/test")
public class TestController {

	@RequestMapping(method = RequestMethod.GET)
	public  @ResponseBody String createNewProduct() {
		return "Hello World!!";
	}
}
