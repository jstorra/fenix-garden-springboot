package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.EmployeeDTO;
import com.campus.fenixgarden.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employees")
@CrossOrigin("*")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // 1)
    @GetMapping("/employees-under-supervisor-code/{bossCode}") // 7
    List<Map<Object, Object>> employeesUnderSupervisorCode(@PathVariable Object bossCode) {
        return employeeService.employeesUnderSupervisorCode(bossCode);
    }

    // 2)
    @GetMapping("/boss-details")
    public List<Map<Object, Object>> bossDetails() {
        return employeeService.bossDetails();
    }

    // 3)
    @GetMapping("/non-sales-representatives-details")
    public List<Map<Object, Object>> nonSalesRepresentativesDetails() {
        return employeeService.nonSalesRepresentativesDetails();
    }

    // 4)
    @GetMapping("/employees-with-supervisors")
    public List<Map<Object, Object>> employeesWithSupervisors() {
        return employeeService.employeesWithSupervisors();
    }

    // 5)
    @GetMapping("/employees-with-supervisors-and-grand-supervisors")
    public List<Map<Object, Object>> employeesWithSupervisorsAndGrandSupervisors() {
        return employeeService.employeesWithSupervisorsAndGrandSupervisors();
    }

    // 6)
    @GetMapping("/employees-without-office")
    public List<EmployeeDTO> employeesWithoutOffice() {
        return employeeService.employeesWithoutOffice();
    }

    // 7)
    @GetMapping("/employees-without-clients")
    public List<EmployeeDTO> employeesWithoutClients() {
        return employeeService.employeesWithoutClients();
    }

    // 8)
    @GetMapping("/employees-without-clients-and-office-details")
    public List<Map<Object, Object>> employeesWithoutClientsAndOfficeDetails() {
        return employeeService.employeesWithoutClientsAndOfficeDetails();
    }

    // 9)
    @GetMapping("/employees-without-office-and-clients")
    public List<EmployeeDTO> employeesWithoutOfficeAndClients() {
        return employeeService.employeesWithoutOfficeAndClients();
    }

    // 10)
    @GetMapping("/employees-without-clients-and-supervisor")
    public List<Map<Object, Object>> employeesWithoutClientsAndSupervisor() {
        return employeeService.employeesWithoutClientsAndSupervisor();
    }

    // 11)
    @GetMapping("/total-employees")
    public int totalEmployees() {
        return employeeService.totalEmployees();
    }
}
