package com.vfms.domain;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Managers {
    private Integer managerid;
    private String managerusername;
    private String managerpsw;
    private Integer ssid;

    public Integer getManagerid() {
        return managerid;
    }

    public void setManagerid(Integer managerid) {
        this.managerid = managerid;
    }

    public String getManagerusername() {
        return managerusername;
    }

    public void setManagerusername(String managerusername) {
        this.managerusername = managerusername;
    }

    public String getManagerpsw() {
        return managerpsw;
    }

    public void setManagerpsw(String managerpsw) {
        this.managerpsw = managerpsw;
    }

    public Integer getSsid() {
        return ssid;
    }

    public void setSsid(Integer ssid) {
        this.ssid = ssid;
    }

    @Override
    public String toString() {
        return "Managers{" +
                "managerid=" + managerid +
                ", managerusername='" + managerusername + '\'' +
                ", managerpsw='" + managerpsw + '\'' +
                ", ssid=" + ssid +
                '}';
    }
}
