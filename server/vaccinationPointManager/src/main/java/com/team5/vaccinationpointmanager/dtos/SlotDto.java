package com.team5.vaccinationpointmanager.dtos;

import lombok.Data;

import java.sql.Time;

@Data
public class SlotDto {
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
