package com.team5.vaccinationpointmanager.services;

import com.team5.vaccinationpointmanager.dtos.BookingDto;
import com.team5.vaccinationpointmanager.dtos.SlotDto;
import com.team5.vaccinationpointmanager.dtos.UserDto;
import com.team5.vaccinationpointmanager.mappers.BookingMapper;
import com.team5.vaccinationpointmanager.mappers.SlotMapper;
import com.team5.vaccinationpointmanager.mappers.UserMapper;
import com.team5.vaccinationpointmanager.models.Booking;
import com.team5.vaccinationpointmanager.models.Slot;
import com.team5.vaccinationpointmanager.models.User;
import com.team5.vaccinationpointmanager.repos.BookingRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SlotServiceImp implements SlotService {

    private final SlotMapper slotMapper;
    private final UserMapper userMapper;
    private final BookingMapper bookingMapper;

    private final BookingRepo bookingRepo;

    @Override
    public BookingDto bookSlot(SlotDto slotDto, UserDto userDto) {
        Slot slot = slotMapper.dtoToEntity(slotDto);
        User user = userMapper.dtoToEntity(userDto);

        Booking booking = new Booking();
        booking.setUser(user);
        booking.setLocation(slot.getLocation());
        booking.setStartTime(slot.getStartTime());

        bookingRepo.save(booking);
        return bookingMapper.entityToDto(booking);
    }
}
