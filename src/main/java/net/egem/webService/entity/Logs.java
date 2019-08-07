package net.egem.webService.entity;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by enbiya on 21.02.2017.
 */
@Entity
@Table(name = "t_logs")
public class Logs {

    @Id
    @Column(name = "executionid")
    private String executionId;

    @Column(name = "senderserialno")
    private String senderSerialNo;//bayi id'si

    @Column(name = "jobname")
    private String jobName;//boş dursun

    @Column(name = "startdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date startDate;

    @Column(name = "recorddate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date recordDate;

    @Column(name = "sentdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date sentDate;

    @Column(name = "sent")
    private boolean sent;

    @Column(name = "successful")
    private boolean successful;//test sonucu

    @Column(name = "faultexception")
    private boolean faultException;//false olacak

    @Column(name = "exceptionmessage")
    private String exceptionMessage;//null

    @Column(name = "modemserialnumber")
    private String modemSerialNumber;//modem seri nosu

    public Logs() {
    }

    public Logs(String executionId, String senderserialno, String jobname, Date startdate, Date recorddate, Date sentdate, boolean sent, boolean successful, boolean faultexception, String exceptionmessage, String modemserialnumber) {
        super();
        this.executionId = executionId;
        this.senderSerialNo = senderserialno;
        this.jobName = jobname;
        this.startDate = startdate;
        this.recordDate = recorddate;
        this.sentDate = sentdate;
        this.sent = sent;
        this.successful = successful;
        this.faultException = faultexception;
        this.exceptionMessage = exceptionmessage;
        this.modemSerialNumber = modemserialnumber;
    }

    public String getExecutionId() {
        return executionId;
    }

    public void setExecutionId(String executionId) {
        this.executionId = executionId;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {

        this.startDate = new Date();
    }

    public Date getRecordDate() {
        return recordDate;
    }

    public void setRecordDate(Date recordDate) {

        this.recordDate = new Date();
    }

    public Date getSentDate() {
        return sentDate;
    }

    public void setSentDate(Date sentDate) {

        this.sentDate = new Date();
    }

    public boolean isSent() {
        return sent;
    }

    public void setSent(boolean sent) {
        this.sent = sent;
    }

    public boolean isSuccessful() {
        return successful;
    }

    public void setSuccessful(boolean successful) {
        this.successful = successful;
    }

    public boolean isFaultException() {
        return faultException;
    }

    public void setFaultException(boolean faultException) {
        this.faultException = false;//böyle kalsın
    }

    public String getSenderSerialNo() {
        return senderSerialNo;
    }

    public void setSenderSerialNo(String senderSerialNo) {
        this.senderSerialNo = senderSerialNo;
    }

    public String getExceptionMessage() {
        return exceptionMessage;
    }

    public void setExceptionMessage(String exceptionMessage) {
        this.exceptionMessage = exceptionMessage;
    }

    public String getModemSerialNumber() {
        return modemSerialNumber;
    }

    public void setModemSerialNumber(String modemSerialNumber) {
        this.modemSerialNumber = modemSerialNumber;
    }

}
