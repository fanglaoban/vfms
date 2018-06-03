package com.vfms.web;

import com.vfms.domain.Value;
import com.vfms.domain.Views;
import com.vfms.service.ValueService;
import com.vfms.service.ViewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

/**
 * Created by xiaolinzi on 2018/6/3.
 */
@Controller
public class ValueController {

    @Autowired
    private ValueService valueService;

    @Autowired
    private ViewsService viewsService;

    @GetMapping("/{user}/prewarning/threshold")
    public String getPrewarningThreshold(){
        return "prewarning_threshold";
    }

    @GetMapping("/prewarning/threshold/query")
    public String queryPrewarningThreshold(@RequestParam(value = "name",required = false) String name, Model model, HttpSession session){
        if (name == null){
            name = (String) session.getAttribute("name");
        }
        String[] reg = name.split("/");
        session.setAttribute("name",name);
        Views views = viewsService.findByName(reg[2]);
        if (views == null)
            return "error";

        session.setAttribute("viewid",views.getViewid());
        List<Value> values = valueService.queryValuesById(views.getViewid());

        model.addAttribute("values",values);
        model.addAttribute("name",name);
        return "prewarning_threshold";
    }

    @GetMapping("/prewarning/threshold/delete/{id}")
    public String deletePrewarningThreshold(@PathVariable("id") Integer id){
        valueService.deleteValue(id);

        return "redirect:/prewarning/threshold/query";
    }

    @PostMapping("/prewarning/threshold/add")
    public String addPrewarningThreshold(@RequestParam(value = "name") String name,@RequestParam(value = "level") String level,@RequestParam(value = "number") String number,HttpSession session){
//        System.out.println(name);
//        System.out.println(level);
//        System.out.println(number);
        Integer viewid = (Integer) session.getAttribute("viewid");

        String[] names = {"","爆满","拥挤","适宜","最佳","稀少"};
        String dbName = names[Integer.parseInt(name.charAt(2)+"")];

        Value value = new Value();
        value.setValuelevel(Integer.parseInt(level.charAt(2)+""));
        value.setValuenumber(number);
        value.setValuename(dbName);
        value.setViewid(viewid);

        valueService.addValue(value);

        return "redirect:/prewarning/threshold/query";
    }



}
