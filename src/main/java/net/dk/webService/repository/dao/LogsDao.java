package net.dk.webService.repository.dao;

import net.dk.webService.entity.Log;
import net.dk.webService.entity.Logs;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
public interface LogsDao extends CrudRepository<Logs, String> {

    Logs findByExecutionId(String executionId);
    List<Log> findLogsByExecutionId(String executionId);

}
