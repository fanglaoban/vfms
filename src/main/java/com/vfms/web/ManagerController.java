package com.vfms.web;

import com.vfms.domain.Managers;
import com.vfms.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


/**
 * 管理员的接口
 * Created by xiaolinzi on 2018/5/28.
 */
@Controller
public class ManagerController {

    @Autowired
    private ManagerService managerService;

    @GetMapping("/")
    public String login(){
        return "admin_login";
    }

    /**
     * 管理员登录系统
     * @param name 账户名
     * @param password 密码
     * @return 成功跳转，失败重定向登录页
     */
    @PostMapping("/manager/login")
    public String loginByManager(@RequestParam(value = "name",required = true) String name,
                               @RequestParam(value = "password",required = true) String password,
                               HttpSession session, HttpServletRequest request){
        Managers managers = managerService.findByNameAndPasswd(name,password);
        Managers manager = (Managers) session.getAttribute("manager");
        if (managers == null)
            return "redirect:/";
        if (manager == null){
            session.setAttribute("manager",managers);
        }
        return "system";
    }

    /**
     * 游客登录管理系统
     * @return
     */
    @GetMapping("/user/login")
    public String loginByUser(){
        return "system";
    }

    @GetMapping("/manager/account")
    public String getAdminAccount(){
        return "admin_account";
    }



}
