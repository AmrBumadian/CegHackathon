package com.team5.vaccinationpointmanager.dtos;

import lombok.Data;

import java.sql.Date;

@Data
public class UserDto {
    private String ssn;
    private String name;
    private String mobile;
    private String address;
    private Date birthday;
    private String password;
}
