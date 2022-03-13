package com.team5.vaccinationpointmanager.repos;

import com.team5.vaccinationpointmanager.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface BookingRepo extends JpaRepository<Booking, UUID> {
}
