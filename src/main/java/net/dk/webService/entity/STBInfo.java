package net.dk.webService.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by drsnkrt on 9/13/2018.
 */
@Entity
@Table(name = "t_stbinfo")
public class STBInfo {

    @Id
    @Column(name = "serialnumber")
    private String serialNumber;

    @Column(name = "macaddress")
    private String macAddress;

    @Column(name = "brand")
    private String brand;

    @Column(name = "model")
    private String model;

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getMacAddress() {
        return macAddress;
    }

    public void setMacAddress(String macAddress) {
        this.macAddress = macAddress;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
