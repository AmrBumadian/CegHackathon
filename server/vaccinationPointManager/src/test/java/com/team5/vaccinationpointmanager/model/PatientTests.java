package com.team5.vaccinationpointmanager.model;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.fail;

public class PatientTests {

	@Test
	void testPatientCreationWithNoRequiredAttributes() {
		try {
			Patient patient = new Patient();
			fail();
		} catch(Exception exception) {

		}
	}

}
