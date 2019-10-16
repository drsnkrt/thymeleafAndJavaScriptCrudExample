package net.dk.webService.controller;

import net.dk.webService.entity.STBInfo;
import net.dk.webService.repository.service.STBInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@RestController
public class STBController {

    @Autowired
    STBInfoService service;

    @DeleteMapping(value = "/{serial}")
    public void delete(@PathVariable("serial") final String serial) {
        service.deleteBySerialNumber(serial);
    }

    @PostMapping(value = "/save")
    public void save(@RequestBody final STBInfo stbInfo) {
        service.save(stbInfo);
    }

    @GetMapping(value = "/{serial}")
    public STBInfo getBySerialNumber(@PathVariable("serial") final String serial) {
        return service.getBySerialNumber(serial);
    }

    @GetMapping(value = "/getallstb")
    public Iterable<STBInfo> getAll() {
        return service.getAll();
    }

    @GetMapping(value = "/all")
    public List<STBInfo> getAllEmployees() {
        return service.getAll();
    }


}
