package com.vfms.service;

import com.vfms.dao.ViewstateDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
@Service
public class ViewstateServiceImpl implements ViewstateService {

    @Autowired
    private ViewstateDao viewstateDao;

    @Override
    public Integer getNumbers(Integer id, Date time) {
        return viewstateDao.getNumbers(id,time);
    }
}
