package com.team5.vaccinationpointmanager.mappers;

public interface DefaultMapper<E, D> {
    E dtoToEntity(D dto);
    D entityToDto(E entity);
}
