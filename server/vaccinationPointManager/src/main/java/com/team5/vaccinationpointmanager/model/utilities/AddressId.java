package com.team5.vaccinationpointmanager.model.utilities;
import lombok.EqualsAndHashCode;
import lombok.RequiredArgsConstructor;
import javax.persistence.Id;
import java.io.Serializable;

@RequiredArgsConstructor
@EqualsAndHashCode
public class AddressId implements Serializable {
	@Id
	private String streetName;

	@Id
	private String city;

	@Id
	private String governorate;

}
