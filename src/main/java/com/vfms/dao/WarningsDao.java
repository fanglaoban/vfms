package com.vfms.dao;

import com.vfms.domain.Warnings;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/4.
 */
@Mapper
public interface WarningsDao {

    @Select("SELECT * FROM warnings WHERE viewid = #{id}")
    List<Warnings> queryWarningsById(@Param("id") Integer id);

    @Delete("DELETE FROM warnings WHERE warningid = #{id}")
    void deleteById(@Param("id") Integer id);

    @Insert("INSERT INTO warnings(viewid,warningmethod,warningcontext,warningtime,warningstate,warninglevel,warningvalue) VALUES(#{viewid},#{warningmethod},#{warningcontext},#{warningtime},#{warningstate},#{warninglevel},#{warningvalue})")
    int insertWarnings(Warnings warnings);
}
