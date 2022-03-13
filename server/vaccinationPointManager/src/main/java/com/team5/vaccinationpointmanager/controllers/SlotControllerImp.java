package com.team5.vaccinationpointmanager.controllers;

import com.team5.vaccinationpointmanager.dtos.BookingDto;
import com.team5.vaccinationpointmanager.dtos.SlotDto;
import com.team5.vaccinationpointmanager.dtos.UserDto;
import com.team5.vaccinationpointmanager.services.SlotService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SlotControllerImp implements SlotController {

    private final SlotService slotService;

    @Override
    public BookingDto bookSlot(@RequestBody SlotDto slotDto, @RequestBody UserDto userDto) {
        if (slotDto == null || userDto == null)
            throw new NullPointerException("Null parameters in bookSlot");
        return slotService.bookSlot(slotDto, userDto);
    }
}
