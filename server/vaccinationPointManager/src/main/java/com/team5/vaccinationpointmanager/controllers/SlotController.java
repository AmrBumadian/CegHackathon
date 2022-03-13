package com.team5.vaccinationpointmanager.controllers;

import com.team5.vaccinationpointmanager.dtos.BookingDto;
import com.team5.vaccinationpointmanager.dtos.SlotDto;
import com.team5.vaccinationpointmanager.dtos.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@CrossOrigin
@RequestMapping("/slots")
public interface SlotController {

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    BookingDto bookSlot(SlotDto slotDto, UserDto userDto);
}
