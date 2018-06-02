package com.vfms.dao;

import com.vfms.domain.Scenicspot;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;


/**
 * Created by xiaolinzi on 2018/5/29.
 */
@Mapper
public interface ScenicspotDao {

    /**
     * 根据景区名字查询景区内容
     * @param name 景区名字
     * @return 景区对象
     */
    @Select("SELECT * FROM scenicspot WHERE ssname = #{name}")
    Scenicspot findByName(@Param("name") String name);

}
