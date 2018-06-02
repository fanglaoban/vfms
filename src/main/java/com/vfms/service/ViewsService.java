package com.vfms.service;

import com.vfms.domain.Views;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
public interface ViewsService {

    List<Views> findById(Integer id);

    Views findByName(String name);
}
