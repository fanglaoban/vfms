package com.vfms.domain;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Routes {
    private Integer routesid;
    private String visitortel;
    private Date startime;
    private Integer lastlocnumber;
    private Integer nextlocnumber;
    private Integer staytime;
    private String passtime;

    public Integer getRoutesid() {
        return routesid;
    }

    public void setRoutesid(Integer routesid) {
        this.routesid = routesid;
    }

    public String getVisitortel() {
        return visitortel;
    }

    public void setVisitortel(String visitortel) {
        this.visitortel = visitortel;
    }

    public Date getStartime() {
        return startime;
    }

    public void setStartime(Date startime) {
        this.startime = startime;
    }

    public Integer getLastlocnumber() {
        return lastlocnumber;
    }

    public void setLastlocnumber(Integer lastlocnumber) {
        this.lastlocnumber = lastlocnumber;
    }

    public Integer getNextlocnumber() {
        return nextlocnumber;
    }

    public void setNextlocnumber(Integer nextlocnumber) {
        this.nextlocnumber = nextlocnumber;
    }

    public Integer getStaytime() {
        return staytime;
    }

    public void setStaytime(Integer staytime) {
        this.staytime = staytime;
    }

    public String getPasstime() {
        return passtime;
    }

    public void setPasstime(String passtime) {
        this.passtime = passtime;
    }
}
