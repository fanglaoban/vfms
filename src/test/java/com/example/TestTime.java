package com.example;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
public class TestTime {

    public static void main(String[] args) throws ParseException {
        Date date = new Date();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        String today = simpleDateFormat.format(date);
        System.out.println(today);
        System.out.println(simpleDateFormat.parse(today));
    }
}
