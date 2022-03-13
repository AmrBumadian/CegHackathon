package com.team5.vaccinationpointmanager.models;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class Slot {
    private VaccinationPoint location;
    private Timestamp startTime;
}
