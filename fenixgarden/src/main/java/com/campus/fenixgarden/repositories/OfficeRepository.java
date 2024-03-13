package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OfficeRepository extends JpaRepository<Office, String> {
}
