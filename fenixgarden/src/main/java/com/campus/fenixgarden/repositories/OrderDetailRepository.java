package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.models.orderdetail.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {

}
