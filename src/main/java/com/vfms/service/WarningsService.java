package com.vfms.service;

import com.vfms.domain.Warnings;
import org.apache.ibatis.annotations.Insert;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/4.
 */
public interface WarningsService {

    List<Warnings> queryWarnings(Integer id);

    void deleteWarnings(Integer id);

    int addWarnings(Warnings warnings);
}
