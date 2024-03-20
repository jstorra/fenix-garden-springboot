package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // 1)
    @Query("SELECT e.employeeCode, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), e.email, e.boss.employeeCode " +
            "FROM Employee e " +
            "WHERE e.boss.employeeCode = ?1")
    List<Object[]> employeesUnderSupervisorCode(int bossCode);

    // 2)
    @Query("SELECT e.employeeCode, e.role, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), e.email " +
            "FROM Employee e " +
            "WHERE e.boss.employeeCode IS NULL")
    List<Object[]> bossDetails();

    // 3)
    @Query("SELECT e.employeeCode, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), e.role " +
            "FROM Employee e " +
            "LEFT JOIN e.customers c " +
            "WHERE c IS NULL")
    List<Object[]> nonSalesRepresentativesDetails();

    // 4)
    @Query("SELECT e.employeeCode, CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), CONCAT(b.name, ' ', b.lastName1, ' ', b.lastName2) " +
            "FROM Employee e " +
            "LEFT JOIN e.boss b")
    List<Object[]> employeesWithSupervisors();

    // 5)
    @Query("SELECT " +
            "e.employeeCode, " +
            "CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), " +
            "CONCAT(b.name, ' ', b.lastName1, ' ', b.lastName2), " +
            "CONCAT(gb.name, ' ', gb.lastName1, ' ', gb.lastName2) " +
            "FROM Employee e " +
            "LEFT JOIN e.boss b " +
            "LEFT JOIN b.boss gb")
    List<Object[]> employeesWithSupervisorsAndGrandSupervisors();

    // 6)
    @Query("SELECT e FROM Employee e " +
            "LEFT JOIN e.office o " +
            "WHERE o IS NULL")
    List<Employee> employeesWithoutOffice();

    // 7)
    @Query("SELECT e FROM Employee e " +
            "LEFT JOIN e.customers c " +
            "WHERE c IS NULL")
    List<Employee> employeesWithoutClients();

    // 8)
    @Query("SELECT " +
            "e.employeeCode, " +
            "CONCAT(e.name, ' ', e.lastName1), " +
            "e.extension, e.email, e.boss.employeeCode, e.role, " +
            "o.officeCode, o.city, o.country, o.region, o.zipCode, o.phone, o.addressLine1, o.addressLine2 " +
            "FROM Employee e " +
            "JOIN e.office o")
    List<Object[]> employeesWithoutClientsAndOfficeDetails();

    // 9)
    @Query("SELECT e FROM Employee e " +
            "LEFT JOIN e.office o " +
            "LEFT JOIN e.customers c " +
            "WHERE o IS NULL OR c IS NULL")
    List<Employee> employeesWithoutOfficeAndClients();

    // 10)
    @Query("SELECT " +
            "e.employeeCode, " +
            "CONCAT(e.name, ' ', e.lastName1, ' ', e.lastName2), " +
            "e.extension, e.email, e.role, e.boss.employeeCode, e.boss.name " +
            "FROM Employee e " +
            "LEFT JOIN e.customers c " +
            "WHERE c IS NULL")
    List<Object[]> employeesWithoutClientsAndSupervisor();

    // 11)
    @Query("SELECT COUNT(*) FROM Employee")
    int totalEmployees();
}
