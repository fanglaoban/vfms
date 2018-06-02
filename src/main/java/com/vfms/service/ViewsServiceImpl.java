package com.vfms.service;

import com.vfms.dao.ViewsDao;
import com.vfms.domain.Views;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
@Service
public class ViewsServiceImpl implements ViewsService {

    @Autowired
    private ViewsDao viewsDao;

    @Override
    public List<Views> findById(Integer id) {
        return viewsDao.findById(id);
    }

    @Override
    public Views findByName(String name) {
        return viewsDao.findByName(name);
    }
}
