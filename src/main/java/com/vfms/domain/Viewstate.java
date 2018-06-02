package com.vfms.domain;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Viewstate {
    private Long viewstateid;
    private Integer viewid;
    private String viewnumbers;
    private Date viewtime;

    public Long getViewstateid() {
        return viewstateid;
    }

    public void setViewstateid(Long viewstateid) {
        this.viewstateid = viewstateid;
    }

    public Integer getViewid() {
        return viewid;
    }

    public void setViewid(Integer viewid) {
        this.viewid = viewid;
    }

    public String getViewnumbers() {
        return viewnumbers;
    }

    public void setViewnumbers(String viewnumbers) {
        this.viewnumbers = viewnumbers;
    }

    public Date getViewtime() {
        return viewtime;
    }

    public void setViewtime(Date viewtime) {
        this.viewtime = viewtime;
    }
}
