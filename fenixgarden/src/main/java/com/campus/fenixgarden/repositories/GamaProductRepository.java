package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.GamaProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GamaProductRepository extends JpaRepository<GamaProduct, String> {

}

