package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.GamaProduct;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GamaProductRepository extends JpaRepository<GamaProduct, String> {
    //1
    @Query("SELECT DISTINCT c.customerName, g.gama " +
            "FROM OrderDetail od " +
            "JOIN od.order o " +
            "JOIN o.customer c " +
            "JOIN od.product pr " +
            "JOIN pr.gamaProduct g " +
            "GROUP BY c.customerName, g.gama")
    List<Object[]> listProductRangesPurchasedByCustomer();
}

