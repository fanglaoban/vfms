package com.vfms.service;

import com.vfms.domain.Managers;

/**
 * Created by xiaolinzi on 2018/5/28.
 */
public interface ManagerService {

    Managers findByNameAndPasswd(String name, String password);
}
