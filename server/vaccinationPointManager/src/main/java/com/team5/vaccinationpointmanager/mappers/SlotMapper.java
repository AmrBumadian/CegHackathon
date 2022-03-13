package com.team5.vaccinationpointmanager.mappers;

import com.team5.vaccinationpointmanager.dtos.SlotDto;
import com.team5.vaccinationpointmanager.models.Slot;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface SlotMapper extends DefaultMapper<Slot, SlotDto>{
}
