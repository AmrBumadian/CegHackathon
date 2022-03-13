package com.team5.vaccinationpointmanager.model;

import com.team5.vaccinationpointmanager.model.utilities.Address;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@Entity
@RequiredArgsConstructor
public class VaccinationPoint {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private final long id;

	private final String name;

	@OneToOne
	private Address address;

	@OneToMany
	List<Reservation> reservations;

	@OneToMany
	List<Doctor> doctors;

	protected VaccinationPoint() {
		id = -1;
		name = "";
	}

	public Boolean reserve(Reservation reservation) {
		if (reservations == null) reservations = new ArrayList<>();
		this.reservations.add(reservation);
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		VaccinationPoint that = (VaccinationPoint) o;
		return id != 0 && Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {
		return getClass().hashCode();
	}
}
