package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    // 1. Devuelve un listado con el nombre de los todos los clientes españoles.
    List<Customer> findByCountryLikeIgnoreCase(String country);

    // 2. Devuelve un listado con el código de cliente de aquellos clientes que realizaron
    // algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente
    // que aparezcan repetidos.
    @Query("SELECT DISTINCT p.customer.customerCode "
            + "FROM Payment p "
            + "WHERE YEAR(p.paymentDate) = 2008 "
            + "AND p.customer.customerCode IS NOT NULL")
    List<Integer> findCustomerCodesWithPaymentsIn2008();

    // 3. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo
    // representante de ventas tenga el código de empleado 11 o 30.
    @Query("SELECT c FROM Customer c "
            + "WHERE c.city = 'Madrid' "
            + "AND (c.repSales.employeeCode = 11 OR c.repSales.employeeCode = 30)")
    List<Customer> findCustomersFromMadridWithRepSales1130();

    // 4. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su
    // representante de ventas.
    @Query("SELECT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) "
            + "FROM Customer c "
            + "JOIN c.repSales e")
    List<Object[]> findCustomersWithRepSales();

    // 5. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre
    // de sus representantes de ventas.
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "JOIN c.payments")
    List<Object[]> findCustomersWithPaymentsAndRepSales();

    // 6. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre
    // de sus representantes de ventas.
    @Query("SELECT DISTINCT c.customerName, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2) " +
            "FROM Customer c " +
            "JOIN c.repSales e " +
            "LEFT JOIN c.payments p " +
            "WHERE p IS NULL")
    List<Object[]> findCustomersWithoutPaymentsAndRepSales();

}
