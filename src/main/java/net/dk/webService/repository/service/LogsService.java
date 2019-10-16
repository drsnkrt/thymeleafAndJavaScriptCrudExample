package net.dk.webService.repository.service;

import net.dk.webService.entity.Log;
import net.dk.webService.entity.Logs;
import net.dk.webService.repository.dao.LogsDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@Service
public class LogsService {

    @Autowired
    LogsDao dao;

    public Iterable<Logs> getAllLogs() {
        return dao.findAll();
    }

    public Logs saveLogs(Logs logs) {
        return dao.save(logs);
    }

    public Logs findByExecutionId(String executionId) {
        return dao.findByExecutionId(executionId);

    }

    public List<Log> getAllLogsById(String executionId) {
        List<Log> logs = new ArrayList<>();
        dao.findLogsByExecutionId(executionId).forEach(logs::add);
        return logs;
    }
}
