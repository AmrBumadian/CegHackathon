package com.team5.vaccinationpointmanager.model;

import lombok.*;
import org.hibernate.Hibernate;
import org.springframework.validation.annotation.Validated;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Validated
public class User {
	@Id
	@Column(name = "id", nullable = false)
	@NonNull
	private String NID;

	@GeneratedValue(strategy = GenerationType.AUTO)
	private String accountID;
	private String firstName;
	private String lastName;
	private String hashedPassword;

	@NonNull
	private String email;
	@NonNull
	private String phoneNumber;

	public User(String NID, String firstName, String lastName, String email, String phoneNumber) {
		this.NID = NID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
		User user = (User) o;
		return NID != null && Objects.equals(NID, user.NID);
	}

	@Override
	public int hashCode() {
		return getClass().hashCode();
	}
}
