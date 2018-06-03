package com.vfms.vo;

import com.vfms.domain.Warnings;

/**
 * Created by xiaolinzi on 2018/6/4.
 */
public class WarningVo {

    private Warnings warnings;

    private String type;

    public WarningVo(Warnings warnings){
        this.warnings = warnings;
        String[] names = {"","爆满","拥挤","适宜","最佳","稀少"};
        type = names[warnings.getWarninglevel()];
    }

    public Warnings getWarnings() {
        return warnings;
    }

    public void setWarnings(Warnings warnings) {
        this.warnings = warnings;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
