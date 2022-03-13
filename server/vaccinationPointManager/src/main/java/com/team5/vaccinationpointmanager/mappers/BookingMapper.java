package com.team5.vaccinationpointmanager.mappers;

import com.team5.vaccinationpointmanager.dtos.BookingDto;
import com.team5.vaccinationpointmanager.models.Booking;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface BookingMapper extends DefaultMapper<Booking, BookingDto> {
}
