package com.vfms.web;

import com.vfms.domain.Scenicspot;
import com.vfms.domain.Views;
import com.vfms.service.ScenicspotService;
import com.vfms.service.ViewsService;
import com.vfms.service.ViewstateService;
import com.vfms.utils.DateSwitch;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
@Controller
public class ViewsController {

    @Autowired
    private ScenicspotService scenicspotService;

    @Autowired
    private ViewsService viewsService;

    @Autowired
    private ViewstateService viewstateService;

    /**
     * 根据景区/景点名字，时间查找相应景区/景点的人数
     *
     * @param name  景区/景点名字
     * @param dates 时间
     * @return 对应时间对应景区/景点的人数
     */
    private Integer[] getTimeNumbers(String name, Date[] dates) {
        String[] reg = name.split("/");
        Integer[] numbers = new Integer[dates.length];
        if (reg.length == 2) {
            Scenicspot scenicspot = scenicspotService.findByName(reg[1]);
            List<Views> views = viewsService.findById(scenicspot.getSsid());
            for (int i = 0; i < dates.length; i++) {
                numbers[i] = 0;
                for (Views view : views) {
                    Integer tmp = viewstateService.getNumbers(view.getViewid(), dates[i]);
                    if (tmp != null)
                        numbers[i] = numbers[i] + tmp;
                }
            }
        } else if (reg.length == 3) {
            Views views = viewsService.findByName(reg[2]);
            for (int i = 0; i < dates.length; i++) {
                numbers[i] = 0;
                Integer tmp = viewstateService.getNumbers(views.getViewid(), dates[i]);
                if (tmp != null)
                    numbers[i] = numbers[i] + tmp;
            }
        }
        return numbers;
    }

    /**
     * 判断日期是否合法
     *
     * @param date 字符串日期 2018-06-02
     * @return 是否合法
     */
    private boolean judgeDate(String date) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date day = simpleDateFormat.parse(date);

        Date judgeDate = new Date();
        String judgeDateString = simpleDateFormat.format(judgeDate);
        Date today = simpleDateFormat.parse(judgeDateString);

        if (today.getTime() - day.getTime() >= 24 * 60 * 60 * 1000L)
            return true;
        return false;
    }

    /**
     * 跳转至实时客流分布查询页面
     *
     * @param user 用户或管理员
     * @return 实时客流分布查询页面
     */
    @GetMapping("/{user}/visitor/flow/realtime")
    public String getQueryVisitorFlow(@PathVariable("user") String user) {
        return "visitor_flow_distribution";
    }

    /**
     * 根据输入景区名字或景点名字实时查询游客数量
     *
     * @param name 景区名字或景点名字
     * @return 时间，人数
     * @throws ParseException 时间解析异常
     */
    @GetMapping("/visitor/flow/realtime")
    @ResponseBody
    public Map<String, Object> queryVisitorFlow(@RequestParam(value = "name", required = true, defaultValue = "陕西省/西安市") String name) throws ParseException {
        Map<String, Object> map = new HashMap<>();

//        System.out.println(name);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String today = "2018-06-03 12:00:00";
        Date[] dates = DateSwitch.createDateList(simpleDateFormat.parse(today));

        Integer[] numbers = getTimeNumbers(name, dates);

        map.put("xtime", DateSwitch.dateToString(dates));
        map.put("numbers", numbers);
//        System.out.println(Arrays.toString(numbers));
        return map;
    }

    /**
     * 跳转至实时客流预测查询页面
     *
     * @param user 用户或管理员
     * @return 实时客流预测查询页面
     */
    @GetMapping("/{user}/visitor/flow/predict")
    public String getPredictVisitorFlow(@PathVariable("user") String user) {
        return "visitor_flow_forecast";
    }

    @GetMapping("/visitor/flow/predict")
    @ResponseBody
    public Map<String, Object> predirectVisitorFlow(@RequestParam(value = "name", required = true, defaultValue = "陕西省/西安市") String name) throws ParseException {
        Map<String, Object> map = new HashMap<>();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String today = "2018-06-03 12:00:00";

        Object[] dates = DateSwitch.createPredictDateList(simpleDateFormat.parse(today));

        Date[] blueDate = (Date[]) dates[0];
        Date[] redDate = (Date[]) dates[1];

        Integer[] blue = getTimeNumbers(name, blueDate);
        Integer[] red = getTimeNumbers(name, redDate);

        System.out.println(name);
        System.out.println(Arrays.toString(blue));
        System.out.println(Arrays.toString(red));

        map.put("blue", blue);
        map.put("red", red);
        map.put("xtime", DateSwitch.dateToString(redDate));

        return map;
    }

    /**
     * 获取历史客流查询的页面
     *
     * @return 历史客流查询的页面
     */
    @GetMapping("/{user}/visitor/flow/history")
    public String getHistoryVisitorFlow() {
        return "visitor_flow_history";
    }

    /**
     *
     * @param date
     * @param name
     * @return
     * @throws ParseException
     */
    @GetMapping("/visitor/flow/history")
    @ResponseBody
    public Map<String, Object> historyVisitorFlow(@RequestParam(value = "date", required = true) String date, @RequestParam(value = "name", required = true, defaultValue = "陕西省/西安市") String name) throws ParseException {
        Map<String, Object> map = new HashMap<>();

        System.out.println(date);
        System.out.println(name);

        if (!judgeDate(date))
            throw new IllegalArgumentException("日期不合法");

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date selectDate = simpleDateFormat.parse(date + " 23:00:00");
        System.out.println(selectDate);
        Object[] dates = DateSwitch.createPredictDateList(selectDate);
        Date[] selectHours = (Date[]) dates[0];
        Integer[] numbers = getTimeNumbers(name, selectHours);

        map.put("xtime", DateSwitch.dateToString(selectHours));
        map.put("numbers", numbers);

        return map;
    }


}
