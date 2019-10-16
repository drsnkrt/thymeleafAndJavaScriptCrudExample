package net.egem.webService.repository.dao;

import net.egem.webService.entity.Log;
import net.egem.webService.entity.Logs;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
public interface LogsDao extends CrudRepository<Logs, String> {

    Logs findByExecutionId(String executionId);
    List<Log> findLogsByExecutionId(String executionId);

}
