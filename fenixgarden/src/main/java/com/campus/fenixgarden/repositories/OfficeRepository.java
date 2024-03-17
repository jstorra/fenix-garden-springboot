package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OfficeRepository extends JpaRepository<Office, String> {
    //1
    @Query("SELECT o.officeCode, o.country FROM Office o")
    List<Object[]> listOfficeCodeAndCity();

    //2
    @Query("SELECT o.city, o.phone FROM Office o WHERE o.country = 'España'")
    List<Object[]> listCityAndPhoneOfSpanishOffices();

    //3
    @Query("SELECT DISTINCT e.office.addressLine1 AS OfficeAddress " +
            "FROM Employee e " +
            "JOIN e.customers c " +
            "WHERE c.city = 'Fuenlabrada'")
    List<Object[]> listOfficeAddressesWithClientsInFuenlabrada();

    //4
    @Query("SELECT DISTINCT o.officeCode " +
            "FROM Office o " +
            "JOIN Employee e ON o.officeCode = e.office.officeCode " +
            "JOIN Customer c ON e.employeeCode = c.repSales.employeeCode " +
            "JOIN Payment p ON c.customerCode = p.customer.customerCode " +
            "JOIN Order ord ON c.customerCode = ord.customer.customerCode " +
            "JOIN OrderDetail od ON ord.orderCode = od.order.orderCode " +
            "JOIN Product prod ON od.product.productCode = prod.productCode " +
            "WHERE prod.gamaProduct.gama != 'Frutales'")
    List<String> findOfficesWithoutFruitOrders();
}
