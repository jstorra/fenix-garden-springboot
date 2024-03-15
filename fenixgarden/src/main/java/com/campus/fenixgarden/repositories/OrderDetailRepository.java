package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.models.orderdetail.OrderDetailId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailId> {
    //1
    @Query("SELECT " +
            "SUM(dp.amount * p.salePrice) AS baseImponible, " +
            "SUM(dp.amount * p.salePrice) * 0.21 AS iva, " +
            "SUM(dp.amount * p.salePrice) + (SUM(dp.amount * p.salePrice) * 0.21) AS totalRevenue " +
            "FROM OrderDetail dp " +
            "JOIN dp.product p")
    List<Object> calculateTotalRevenue();
    //2
    @Query("SELECT " +
            "dp.product.productCode, " +
            "SUM(dp.amount * p.salePrice) AS baseImponible, " +
            "SUM(dp.amount * p.salePrice) * 0.21 AS iva, " +
            "SUM(dp.amount * p.salePrice) + (SUM(dp.amount * p.salePrice) * 0.21) AS totalRevenue " +
            "FROM OrderDetail dp " +
            "JOIN dp.product p " +
            "GROUP BY dp.product.productCode")
    List<Object> calculateRevenueByProduct();
    //3
    @Query("SELECT " +
            "dp.product.productCode, " +
            "SUM(dp.amount * p.salePrice) AS baseImponible, " +
            "SUM(dp.amount * p.salePrice) * 0.21 AS iva, " +
            "SUM(dp.amount * p.salePrice) + (SUM(dp.amount * p.salePrice) * 0.21) AS totalRevenue " +
            "FROM OrderDetail dp " +
            "JOIN dp.product p " +
            "WHERE dp.product.productCode LIKE 'OR%' " +
            "GROUP BY dp.product.productCode")
    List<Object> calculateRevenueByProductFilteredByOR();
    //4
    @Query("SELECT " +
            "dp.product.name, " +
            "SUM(dp.amount) AS unitsSold, " +
            "SUM(dp.amount * p.salePrice) AS totalRevenue, " +
            "SUM(dp.amount * p.salePrice) * 1.21 AS totalWithIVA " +
            "FROM OrderDetail dp " +
            "JOIN dp.product p " +
            "GROUP BY dp.product.name " +
            "HAVING SUM(dp.amount * p.salePrice) > 3000")
    List<Object> listTotalSalesOfProductsOver3000Euros();
    //5
    @Query("SELECT o.orderCode, COUNT(DISTINCT od.product.productCode) " +
            "FROM OrderDetail od " +
            "JOIN od.order o " +
            "GROUP BY o.orderCode")
    List<Object> calculateNumberOfProductsPerOrder();
    //6
    @Query("SELECT dp.order.orderCode, SUM(dp.amount) " +
            "FROM OrderDetail dp " +
            "GROUP BY dp.order.orderCode")
    List<Object> calculateTotalQuantityPerOrder();


}
