package com.team5.vaccinationpointmanager.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@RequiredArgsConstructor
public class Doctor extends User{
}
