package net.dk.webService.repository.service;

import net.dk.webService.entity.BindSTBInfo;
import net.dk.webService.repository.dao.BindSTBInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by drsnkrt on 9/14/2018.
 */
@Service
public class BindSTBInfoService  {

    @Autowired
    BindSTBInfoDao dao;

    public void save(BindSTBInfo bindSTBInfo) {
        dao.save(bindSTBInfo);
    }

    public void deleteBySerialNumber(String serial) {
        dao.deleteById(serial);
    }

    public Iterable<BindSTBInfo> getAll() {
        return dao.findAll();
    }

}
