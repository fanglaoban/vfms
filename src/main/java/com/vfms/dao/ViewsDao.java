package com.vfms.dao;

import com.vfms.domain.Views;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/5/29.
 */
public interface ViewsDao {

    /**
     * 根据景区id查询景区所有景点
     * @param id 景区id
     * @return 景区中的景点列表
     */
    @Select("SELECT * FROM views WHERE ssid = #{id}")
    List<Views> findById(@Param("id") Integer id);

    /**
     * 根据景点名字查询景点
     * @param name 景点名字
     * @return 景点对象
     */
    @Select("SELECT * FROM views WHERE viewname = #{name}")
    Views findByName(@Param("name") String name);
}
