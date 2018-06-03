package com.vfms.service;

import com.vfms.dao.WarningsDao;
import com.vfms.domain.Warnings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by xiaolinzi on 2018/6/4.
 */
@Service
public class WarningsServiceImpl implements WarningsService {

    @Autowired
    private WarningsDao warningsDao;

    @Override
    public List<Warnings> queryWarnings(Integer id) {
        return warningsDao.queryWarningsById(id);
    }

    @Override
    public void deleteWarnings(Integer id) {
        warningsDao.deleteById(id);
    }

    @Override
    public int addWarnings(Warnings warnings) {
        return warningsDao.insertWarnings(warnings);
    }
}
