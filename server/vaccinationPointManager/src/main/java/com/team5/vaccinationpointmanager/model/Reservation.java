package com.team5.vaccinationpointmanager.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
public class Reservation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private Long id;

	@ManyToOne
	private VaccinationPoint vaccinationPoint;

	@OneToOne
	private Patient patient;

	private LocalDate dateAndTime;

	private LocalDate createdAt;
	private Status status;

	public Reservation(VaccinationPoint vaccinationPoint, Patient patient, LocalDate dateAndTime, LocalDate createdAt) {
		this.vaccinationPoint = vaccinationPoint;
		this.patient = patient;
		this.dateAndTime = dateAndTime;
		this.createdAt = createdAt;
		status = Status.AVAILABLE;
	}

	public enum Status {
		AVAILABLE("Available"), PENDING("Pending"), DONE("done"), CANCELLED("Cancelled");
		private final String name;

		Status(String name) {
			this.name = name;
		}

		public String toString() {
			return name;
		}

	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Reservation that = (Reservation) o;
		return id != null && Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {
		return getClass().hashCode();
	}
}
