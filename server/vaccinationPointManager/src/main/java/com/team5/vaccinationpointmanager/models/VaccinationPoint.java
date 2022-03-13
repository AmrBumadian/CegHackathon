package com.team5.vaccinationpointmanager.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Time;

@Data
@Entity
public class VaccinationPoint {
    @Id
    private long id;
    private String displayName;
    private String location;
    private int capacity;
    private int doctorsCount;
    private Time openingTime;
    private Time closingTime;
    private double totalRatings;
    private long ratingsCount;
    private String phone;
}
