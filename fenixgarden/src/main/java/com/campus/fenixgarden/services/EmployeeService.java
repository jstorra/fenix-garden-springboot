package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Employee;
import com.campus.fenixgarden.models.dtos.EmployeeDTO;
import com.campus.fenixgarden.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
