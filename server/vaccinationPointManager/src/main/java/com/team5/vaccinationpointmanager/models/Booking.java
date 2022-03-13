package com.team5.vaccinationpointmanager.models;

import lombok.Data;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.UUID;

@Data
@Entity
public class Booking {

    @Id
    @GeneratedValue
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "ssn")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id")
    private VaccinationPoint location;

    private Timestamp startTime;
}
