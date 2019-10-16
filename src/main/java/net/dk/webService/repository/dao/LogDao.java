package net.dk.webService.repository.dao;

import net.dk.webService.entity.Log;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by drsnkrt on 9/13/2018.
 */
public interface LogDao extends JpaRepository<Log,Long> {

    Log findById(long id);


}
