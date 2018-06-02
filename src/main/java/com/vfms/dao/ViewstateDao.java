package com.vfms.dao;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
public interface ViewstateDao {

    /**
     * 查询相应时间点景区的人数
     * @param id 景区id
     * @param time 时间点
     * @return 景区人数
     */
    @Select("SELECT viewnumbers FROM viewstate WHERE viewid = #{id} and viewtime = #{time}")
    Integer getNumbers(@Param("id") Integer id, @Param("time") Date time);
}
