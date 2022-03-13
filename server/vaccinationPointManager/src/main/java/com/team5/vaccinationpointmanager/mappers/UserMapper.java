package com.team5.vaccinationpointmanager.mappers;

import com.team5.vaccinationpointmanager.dtos.UserDto;
import com.team5.vaccinationpointmanager.models.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface UserMapper extends DefaultMapper<User, UserDto>{
}
