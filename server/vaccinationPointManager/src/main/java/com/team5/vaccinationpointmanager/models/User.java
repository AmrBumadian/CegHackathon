package com.team5.vaccinationpointmanager.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Date;

@Data
@Entity
public class User {
    @Id
    private String ssn;
    private String name;
    private String mobile;
    private String address;
    private Date birthday;
    private String password;
}
