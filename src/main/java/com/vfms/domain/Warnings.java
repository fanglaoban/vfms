package com.vfms.domain;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Warnings {
    private Integer warningid;
    private Integer ssid;
    private String warningmethod;
    private String warningcontext;
    private String warningfrequency;
    private Integer warninglevel;
    private Date warningtime;
    private Integer warningstate;

    public Integer getWarningid() {
        return warningid;
    }

    public void setWarningid(Integer warningid) {
        this.warningid = warningid;
    }

    public Integer getSsid() {
        return ssid;
    }

    public void setSsid(Integer ssid) {
        this.ssid = ssid;
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

    public String getWarningfrequency() {
        return warningfrequency;
    }

    public void setWarningfrequency(String warningfrequency) {
        this.warningfrequency = warningfrequency;
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
}
