package net.dk.webService.controller;

import net.dk.webService.entity.Log;
import net.dk.webService.entity.Logs;
import net.dk.webService.repository.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@RestController
@RequestMapping("log")
public class LogController {

    @Autowired
    LogService service;

    @PostMapping(value = "/savelog")
    public void save(@RequestBody final Log log) {
        service.save(log);
    }

    @GetMapping(value = "/getalllog")
    public List<Log> getAll() {
        return service.getAll();
    }

    @GetMapping(value = "/{executionId}/log/{id}")
    public Log getById(@PathVariable final long id) {
        return service.getById(id);
    }

    @PostMapping(value = "/{executionId}/log")
    public void savelog(@RequestBody Log log, @PathVariable String executionId) {
        log.setLogs(new Logs(executionId, "", "", new Date(), new Date(), new Date(), true, true, false, "", ""));
        service.save(log);
    }


}
