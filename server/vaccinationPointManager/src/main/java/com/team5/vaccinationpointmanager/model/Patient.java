package com.team5.vaccinationpointmanager.model;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)

public class Patient extends User {
	private Boolean vaccinated;
	private String vaccineType;
	@OneToOne
	private Reservation reservation;

	public Patient(String NID, String firstName, String lastName, String email, String phoneNumber) {
		super(NID, firstName, lastName, email, phoneNumber);
		boolean vaccinated = false;
		String vaccineType = null;
		reservation = null;
	}

	public Boolean reserve(VaccinationPoint vaccinationPoint, Reservation reservation) {
		reservation.setPatient(this);
		reservation.setStatus(Reservation.Status.PENDING);
		return vaccinationPoint.reserve(reservation);
	}
}
