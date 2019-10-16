package net.egem.webService.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by drsnkrt on 9/14/2018.
 */
@Entity
@Table(name = "t_bindedstbinfo")
public class BindSTBInfo {

    @Id
    @Column(name = "serialnumber")
    private String serialNumber;

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }
}
