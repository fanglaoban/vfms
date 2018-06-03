package com.vfms.web;

import com.vfms.domain.Views;
import com.vfms.domain.Warnings;
import com.vfms.service.ViewsService;
import com.vfms.service.WarningsService;
import com.vfms.vo.WarningVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/4.
 */
@Controller
public class WarningsController {

    @Autowired
    private WarningsService warningsService;

    @Autowired
    private ViewsService viewsService;

    @GetMapping("/{user}/prewarning/setting")
    public String getPrewarningSetting(){
        return "prewarning_setting";
    }

    @GetMapping("/prewarning/setting/query")
    public String queryPrewarningSetting(@RequestParam(value = "name",required = false) String name, Model model, HttpSession session){
        if (name == null) {
            name = (String) session.getAttribute("prewarning_city");
        }
        String[] reg = name.split("/");
        session.setAttribute("prewarning_city",name);

        Views views = viewsService.findByName(reg[2]);
        if (views == null)
            return "error";

        session.setAttribute("prewarning_view_id",views.getViewid());
        List<Warnings> warnings = warningsService.queryWarnings(views.getViewid());
        List<WarningVo> warningVos = new ArrayList<>();
        for (Warnings warning : warnings)
            warningVos.add(new WarningVo(warning));

        model.addAttribute("warnings",warningVos);
        model.addAttribute("name",name);
        model.addAttribute("address",reg[2]);

        return "prewarning_setting";
    }

    @GetMapping("/prewarning/setting/delete/{id}")
    public String deletePrewarningSetting(@PathVariable("id") Integer id){
        warningsService.deleteWarnings(id);

        return "redirect:/prewarning/setting/query";
    }


    @PostMapping("/prewarning/setting")
    public String addPrewarningSetting(@RequestParam("level") String level,@RequestParam("warningvalue") Integer warningvalue,
                                       @RequestParam("method") String method,@RequestParam("text") String text,HttpSession session){
//        System.out.println(level);
//        System.out.println(warningvalue);
//        System.out.println(method);
//        System.out.println(text);
//        lv1 7000 ty1 测试

        String[] methods = {"","信息推送","系统推送","景区广播"};
        String methodDb = methods[Integer.parseInt(method.charAt(2)+"")];
        Integer viewid = (Integer) session.getAttribute("prewarning_view_id");
        Warnings warnings = new Warnings();
        warnings.setWarningvalue(warningvalue);
        warnings.setViewid(viewid);
        warnings.setWarninglevel(Integer.parseInt(level.charAt(2)+""));
        warnings.setWarningmethod(methodDb);
        warnings.setWarningcontext(text);
        warnings.setWarningtime(new Date());
        warnings.setWarningstate(0);

        warningsService.addWarnings(warnings);

        return "redirect:/prewarning/setting/query";
    }

    @GetMapping("/{user}/prewarning/record")
    public String getPrewarningRecord(){
        return "prewarning_record";
    }
}
