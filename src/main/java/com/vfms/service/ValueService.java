package com.vfms.service;

import com.vfms.domain.Value;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/3.
 */
public interface ValueService {

    List<Value> queryValuesById(Integer id);

    void deleteValue(Integer id);

    int addValue(Value value);

    void updateValue(Value value);
}
