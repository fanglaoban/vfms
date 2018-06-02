package com.vfms.service;

import com.vfms.domain.Scenicspot;

/**
 * Created by xiaolinzi on 2018/5/30.
 */
public interface ScenicspotService {

    Scenicspot findByName(String name);
}
