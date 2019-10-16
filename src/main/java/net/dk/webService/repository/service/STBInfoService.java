package net.dk.webService.repository.service;

import net.dk.webService.entity.STBInfo;
import net.dk.webService.repository.dao.STBInfoDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@Service
public class STBInfoService {

    @Autowired
    STBInfoDao dao;

    public STBInfo getBySerialNumber(String serial) {
        return dao.getBySerialNumber(serial);
    }

    public void save(STBInfo stbInfo) {
        dao.save(stbInfo);
    }

    public void deleteBySerialNumber(String serial) {
        dao.deleteById(serial);
    }

    public List<STBInfo> getAll() {
        return dao.findAll();
    }

}
