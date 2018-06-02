package com.vfms.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
public class DateSwitch {

    private DateSwitch() {
    }

    /**
     * 生成实时的时间列表
     *
     * @return
     */
    public static Date[] createDateList() {
        return createDateList(new Date());
    }

    public static Date[] createDateList(Date date) {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String today = simpleDateFormat.format(date);
        String[] reg = today.split(":");
        Integer minute = Integer.parseInt(reg[1]);
        reg[1] = String.valueOf(minute - minute % 5);

        String end = reg[0] + ":" + reg[1] + ":" + reg[2];
        Date[] res = new Date[25];
        try {
            Date endDate = simpleDateFormat.parse(end);
            res[24] = endDate;
            for (int i = 1; i < 25; i++)
                res[24 - i] = new Date(endDate.getTime() - 5 * i * 60 * 1000L);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return res;
    }

    /**
     * 生成当天的时间表
     *
     * @return 当天的时间表
     * @throws ParseException 时期转换异常
     */
    public static Object[] createPredictDateList() throws ParseException {
        return createPredictDateList(new Date());
    }


    public static Object[] createPredictDateList(Date date) throws ParseException {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String[] tmp = simpleDateFormat.format(date).split(" ");
        String today = tmp[0];
        String hour = tmp[1].split(":")[0];
        Integer hourInt = Integer.parseInt(hour);
        String[] blue = new String[hourInt + 1];
        for (int i = 0; i <= hourInt; i++)
            blue[i] = "" + i;
        String[] red = {"00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"};

        Date[] blueDates = new Date[blue.length];
        for (int i=0;i<blue.length;i++)
            blueDates[i] = simpleDateFormat.parse(today + " " + blue[i] + ":00:00");

        Date[] redDates = new Date[red.length];
        for (int i = 0; i < red.length; i++) {
            Date redTmp = simpleDateFormat.parse(today + " " + red[i] + ":00:00");
            redDates[i] = new Date(redTmp.getTime() - 7 * 24 * 60 * 60 * 1000L);
        }

        Object[] res = new Object[2];
        res[0] = blueDates;
        res[1] = redDates;

        return res;
    }


    public static String[] dateToString(Date[] dates) {
        String[] res = new String[dates.length];
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("HH:mm");
        for (int i = 0; i < dates.length; i++) {
            res[i] = simpleDateFormat.format(dates[i]);
        }
        return res;
    }

    public static void main(String[] args) throws ParseException {
//        Date[] dates = createDateList();
////        Integer test = Integer.parseInt("07");
////        System.out.println(test - test % 5);
//        for (Date date : dates)
//            System.out.println(date);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String test = "2018-06-03 17:34:12";
        Date date = simpleDateFormat.parse(test);
        Object[] dates = createPredictDateList(date);
        Date[] blue = (Date[]) dates[0];
        Date[] red = (Date[]) dates[1];
        System.out.println(Arrays.toString(dateToString(blue)));
        System.out.println(Arrays.toString(dateToString(red)));
    }
}
