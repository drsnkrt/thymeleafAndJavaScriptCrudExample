package net.dk.webService.repository.service;

import net.dk.webService.entity.Log;
import net.dk.webService.repository.dao.LogDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@Service
public class LogService {

    @Autowired
    LogDao dao;


    public void save(Log log) {
        dao.save(log);
    }

    public List<Log> getAll() {
        return dao.findAll();
    }

    public Log getById(long id) {
        return dao.findById(id);
    }


}
