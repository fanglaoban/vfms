package com.vfms.service;

import com.vfms.dao.ValueDao;
import com.vfms.domain.Value;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/3.
 */
@Service
public class ValueServiceImpl implements ValueService{

    @Autowired
    private ValueDao valueDao;

    @Override
    public List<Value> queryValuesById(Integer id) {
        return valueDao.findByViewid(id);
    }

    @Override
    public void deleteValue(Integer id) {
        valueDao.deleteById(id);
    }

    @Override
    public int addValue(Value value) {
        return valueDao.insertValue(value);
    }

    @Override
    public void updateValue(Value value) {
        valueDao.update(value);
    }
}
