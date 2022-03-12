package com.team5.vaccinationpointmanager.model.utilities;

import lombok.*;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.util.Objects;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Entity
@IdClass(AddressId.class)
public class Address {
	@Id
	private String streetName;

	@Id
	private String city;

	@Id
	private String governorate;

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Address address = (Address) o;
		return streetName != null && Objects.equals(streetName, address.streetName)
				&& city != null && Objects.equals(city, address.city)
				&& governorate != null && Objects.equals(governorate, address.governorate);
	}

	@Override
	public int hashCode() {
		return Objects.hash(streetName, city, governorate);
	}
}
