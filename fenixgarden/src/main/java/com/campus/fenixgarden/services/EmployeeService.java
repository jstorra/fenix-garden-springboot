package com.campus.fenixgarden.services;

import com.campus.fenixgarden.exceptions.InvalidNumberFormatException;
import com.campus.fenixgarden.models.Employee;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.EmployeeDTO;
import com.campus.fenixgarden.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepository.findAll().stream()
                .map(Employee::toDTO)
                .toList();
    }

    // 1)
    public List<Map<Object, Object>> employeesUnderSupervisorCode(Object bossCode) {
        try {
            int parsedBossCode = Integer.parseInt(bossCode.toString());
            List<Object[]> results = employeeRepository.employeesUnderSupervisorCode(parsedBossCode);
            return TransformResultList.transformResultList(results, "employeeCode", "employeeName", "email");
        } catch(NumberFormatException e) {
            throw new InvalidNumberFormatException("The parameter entered '" + bossCode + "' doesn't have a valid format");
        }
    }

    // 2)
    public List<Map<Object, Object>> bossDetails() {
        List<Object[]> results = employeeRepository.bossDetails();
        return TransformResultList.transformResultList(results, "employeeCode", "role", "employeeName", "email");
    }

    // 3)
    public List<Map<Object, Object>> nonSalesRepresentativesDetails() {
        List<Object[]> results = employeeRepository.nonSalesRepresentativesDetails();
        return TransformResultList.transformResultList(results, "employeeCode", "employeeName", "role");
    }

    // 4)
    public List<Map<Object, Object>> employeesWithSupervisors() {
        List<Object[]> results = employeeRepository.employeesWithSupervisors();
        return TransformResultList.transformResultList(results, "employeeCode", "employeeName", "bossName");
    }

    // 5)
    public List<Map<Object, Object>> employeesWithSupervisorsAndGrandSupervisors() {
        List<Object[]> results = employeeRepository.employeesWithSupervisorsAndGrandSupervisors();
        return TransformResultList.transformResultList(results, "employeeCode", "employeeName", "bossName", "grandBossName");
    }

    // 6)
    public List<EmployeeDTO> employeesWithoutOffice() {
        return employeeRepository.employeesWithoutOffice().stream()
                .map(Employee::toDTO)
                .toList();
    }

    // 7)
    public List<EmployeeDTO> employeesWithoutClients() {
        return employeeRepository.employeesWithoutClients().stream()
                .map(Employee::toDTO)
                .toList();
    }

    // 8)
    public List<Map<Object, Object>> employeesWithoutClientsAndOfficeDetails() {
        List<Object[]> results = employeeRepository.employeesWithoutClientsAndOfficeDetails();
        return TransformResultList.transformResultList(results,
                "employeeCode", "employeeName", "extension",
                "email", "bossCode", "role", "officeCode", "officeCity",
                "officeCountry", "officeRegion", "officeZipCode", "officePhone",
                "officeAddressLine1", "officeAddressLine2");
    }

    // 9)
    public List<EmployeeDTO> employeesWithoutOfficeAndClients() {
        return employeeRepository.employeesWithoutOfficeAndClients().stream()
                .map(Employee::toDTO)
                .toList();
    }

    // 10)
    public List<Map<Object, Object>> employeesWithoutClientsAndSupervisor() {
        List<Object[]> results = employeeRepository.employeesWithoutClientsAndSupervisor();
        return TransformResultList.transformResultList(results,
                "employeeCode", "employeeName", "extension",
                "email", "role", "bossCode", "bossName");
    }

    // 11)
    public int totalEmployees() {
        return employeeRepository.totalEmployees();
    }
}
