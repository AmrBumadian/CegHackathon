package com.team5.vaccinationpointmanager.repos;

import com.team5.vaccinationpointmanager.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {
}
