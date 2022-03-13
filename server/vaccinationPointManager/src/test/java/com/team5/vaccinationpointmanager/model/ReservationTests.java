package com.team5.vaccinationpointmanager.model;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class ReservationTests {
	VaccinationPoint vp = new VaccinationPoint();
	@Test
	void reservationTest() {
		Patient patient = new Patient("30007092104051","Amr", "Bumadian","amrbomadian8@gmail.com", "01032838645");
		Reservation reservation = new Reservation(vp, patient, LocalDate.now().plusDays(1), LocalDate.now());
		assertTrue(patient.reserve(vp, reservation));
	}
}
