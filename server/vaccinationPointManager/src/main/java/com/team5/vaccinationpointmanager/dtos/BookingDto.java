package com.team5.vaccinationpointmanager.dtos;

import com.team5.vaccinationpointmanager.models.User;
import com.team5.vaccinationpointmanager.models.VaccinationPoint;
import lombok.Data;

import java.sql.Timestamp;
import java.util.UUID;

@Data
public class BookingDto {
    private UUID id;
    private User user;
    private VaccinationPoint location;
    private Timestamp startTime;
}
