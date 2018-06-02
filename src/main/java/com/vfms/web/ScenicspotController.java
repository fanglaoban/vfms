package com.vfms.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * Created by xiaolinzi on 2018/5/29.
 */
@Controller
public class ScenicspotController {


    @PostMapping("/")
    public String findScenicspotByName(@RequestParam(value = "name",required = true) String name, Model model){
        return "";
    }

}
