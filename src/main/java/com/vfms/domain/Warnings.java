package com.vfms.domain;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Warnings {
    private Integer warningid;
    private Integer viewid;
    private String warningmethod;
    private String warningcontext;
    private Integer warningvalue;
    private Integer warninglevel;
    private Integer warningstate;
    private Date warningtime;

    public Integer getWarningid() {
        return warningid;
    }

    public void setWarningid(Integer warningid) {
        this.warningid = warningid;
    }

    public String getWarningmethod() {
        return warningmethod;
    }

    public void setWarningmethod(String warningmethod) {
        this.warningmethod = warningmethod;
    }

    public String getWarningcontext() {
        return warningcontext;
    }

    public void setWarningcontext(String warningcontext) {
        this.warningcontext = warningcontext;
    }

    public Integer getWarninglevel() {
        return warninglevel;
    }

    public void setWarninglevel(Integer warninglevel) {
        this.warninglevel = warninglevel;
    }

    public Date getWarningtime() {
        return warningtime;
    }

    public void setWarningtime(Date warningtime) {
        this.warningtime = warningtime;
    }

    public Integer getWarningstate() {
        return warningstate;
    }

    public void setWarningstate(Integer warningstate) {
        this.warningstate = warningstate;
    }

    public Integer getViewid() {
        return viewid;
    }

    public void setViewid(Integer viewid) {
        this.viewid = viewid;
    }

    public Integer getWarningvalue() {
        return warningvalue;
    }

    public void setWarningvalue(Integer warningvalue) {
        this.warningvalue = warningvalue;
    }
}
