package com.vfms.domain;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public class Value {
    private Integer valueid;
    private String valuename;
    private Integer valuelevel;
    private String valuenumber;
    private Integer ssid;

    public Integer getValueid() {
        return valueid;
    }

    public void setValueid(Integer valueid) {
        this.valueid = valueid;
    }

    public String getValuename() {
        return valuename;
    }

    public void setValuename(String valuename) {
        this.valuename = valuename;
    }

    public Integer getValuelevel() {
        return valuelevel;
    }

    public void setValuelevel(Integer valuelevel) {
        this.valuelevel = valuelevel;
    }

    public String getValuenumber() {
        return valuenumber;
    }

    public void setValuenumber(String valuenumber) {
        this.valuenumber = valuenumber;
    }

    public Integer getSsid() {
        return ssid;
    }

    public void setSsid(Integer ssid) {
        this.ssid = ssid;
    }
}
