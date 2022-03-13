package com.team5.vaccinationpointmanager.services;

import com.team5.vaccinationpointmanager.dtos.BookingDto;
import com.team5.vaccinationpointmanager.dtos.SlotDto;
import com.team5.vaccinationpointmanager.dtos.UserDto;

public interface SlotService {
    BookingDto bookSlot(SlotDto slotDto, UserDto userDto);
}
