package net.egem.webService.repository.service;

import net.egem.webService.entity.BindSTBInfo;
import net.egem.webService.repository.dao.BindSTBInfoDao;
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
