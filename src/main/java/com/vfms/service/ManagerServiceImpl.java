package com.vfms.service;

import com.vfms.dao.ManagerDao;
import com.vfms.domain.Managers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private ManagerDao manager;


    @Override
    public Managers findByNameAndPasswd(String name, String password) {
        return manager.findByNameAndPasswd(name,password);
    }
}
