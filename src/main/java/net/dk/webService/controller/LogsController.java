package net.egem.webService.controller;

import net.egem.webService.entity.Log;
import net.egem.webService.entity.Logs;
import net.egem.webService.repository.service.LogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by drsnkrt on 25-Sep-18.
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("logs")
public class LogsController {

    @Autowired
    LogsService logsService;


    @GetMapping(value = "getalllogs")
    public Iterable<Logs> getAllLogs() {
        return logsService.getAllLogs();
    }

    @GetMapping(value = "{executionId}")
    public Logs getLogsByExecutionId(@PathVariable("executionId") final String executionId) {
        return logsService.findByExecutionId(executionId);
    }

    @PostMapping(value = "savelogs")
    public String save(@RequestBody final Logs logs) {
        if (null == logs.getRecordDate()) {
            return "Kayıt Tarihi boş bırakılamaz";
        } else if (null == logs.getSentDate()) {
            return "sent Tarihi boş bırakılamaz";
        } else {
            logsService.saveLogs(logs);
            return "Kayıt okeydir";
        }
    }

    @GetMapping(value = "{executionId}/logs")
    public List<Log> getAllComments(@PathVariable String executionId) {
        return logsService.getAllLogsById(executionId);
    }

}
