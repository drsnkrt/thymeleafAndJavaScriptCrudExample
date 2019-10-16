package net.egem.webService.controller;

import net.egem.webService.entity.BindSTBInfo;
import net.egem.webService.repository.service.BindSTBInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@RestController
public class BindSTBController {

    @Autowired
    BindSTBInfoService service;

    @DeleteMapping(value = "/binding/{serial}")
    public void delete(@PathVariable("serial") final String serial) {
        service.deleteBySerialNumber(serial);
    }

    @PostMapping(value = "/binding/save")
    public void save(@RequestBody final BindSTBInfo bindSTBInfo) {
        service.save(bindSTBInfo);
    }

    @GetMapping(value = "/binding/getallbinding")
    public Iterable<BindSTBInfo> getAll() {
        return service.getAll();
    }

}
