package com.vfms.dao;

import com.vfms.domain.Value;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/3.
 */
@Mapper
public interface ValueDao {

    /**
     * 通过景区id查询阈值
     * @param id
     * @return
     */
    @Select("SELECT * FROM value WHERE viewid = #{id}")
    List<Value> findByViewid(@Param("id") Integer id);

    @Delete("DELETE FROM value WHERE valueid = #{id}")
    void deleteById(@Param("id") Integer id);

    @Insert("INSERT INTO value(valuename,valuelevel,valuenumber,viewid) VALUES(#{valuename},#{valuelevel},#{valuenumber},#{viewid})")
    int insertValue(Value value);

    @Update("UPDATE value SET valuename=#{valuename},valuelevel=#{valuelevel},valuenumber=#{valuenumber} WHERE valueid=#{valueid}")
    void update(Value value);
}
