package net.egem.webService.repository.dao;

import net.egem.webService.entity.STBInfo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by drsnkrt on 9/13/2018.
 */
public interface STBInfoDao extends JpaRepository<STBInfo,String> {

    STBInfo getBySerialNumber(String serial);

}
