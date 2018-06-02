package com.vfms.domain;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Scenicspot {
    private Integer ssid;
    private String ssname;
    private String ssweather;
    private String ssintro;

    public Integer getSsid() {
        return ssid;
    }

    public void setSsid(Integer ssid) {
        this.ssid = ssid;
    }

    public String getSsname() {
        return ssname;
    }

    public void setSsname(String ssname) {
        this.ssname = ssname;
    }

    public String getSsweather() {
        return ssweather;
    }

    public void setSsweather(String ssweather) {
        this.ssweather = ssweather;
    }

    public String getSsintro() {
        return ssintro;
    }

    public void setSsintro(String ssintro) {
        this.ssintro = ssintro;
    }
}
