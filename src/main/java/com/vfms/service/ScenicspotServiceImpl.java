package com.vfms.service;

import com.vfms.dao.ScenicspotDao;
import com.vfms.domain.Scenicspot;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
@Service
public class ScenicspotServiceImpl implements ScenicspotService {

    @Autowired
    private ScenicspotDao scenicspotDao;

    @Override
    public Scenicspot findByName(String name) {
        return scenicspotDao.findByName(name);
    }
}
