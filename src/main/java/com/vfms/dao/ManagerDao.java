package com.vfms.dao;

import com.vfms.domain.Managers;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
@Mapper
public interface ManagerDao {

    /**
     * 根据账户名，密码从数据库中查找管理员
     * @param name 账户名
     * @param password 密码
     * @return 管理员对象
     */
    @Select("SELECT * FROM managers where managerusername = #{name} and managerpsw = #{password}")
    Managers findByNameAndPasswd(@Param("name") String name, @Param("password") String password);
}
