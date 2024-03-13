package com.campus.fenixgarden.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "empleado")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "codigo_empleado")
    private Integer employeeCode;

    @Column(name = "nombre", nullable = false)
    private String name;

    @Column(name = "apellido1", nullable = false)
    private String lastName1;

    @Column(name = "apellido2")
    private String lastName2;

    @Column(name = "extension", nullable = false)
    private String extension;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "puesto")
    private String rol;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_oficina")
    private Office office;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_jefe")
    private Employee boss;

    @OneToMany(mappedBy = "repSales", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Customer> customers;

    public Integer getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(int employeeCode) {
        this.employeeCode = employeeCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName1() {
        return lastName1;
    }

    public void setLastName1(String lastName1) {
        this.lastName1 = lastName1;
    }

    public String getLastName2() {
        return lastName2;
    }

    public void setLastName2(String lastName2) {
        this.lastName2 = lastName2;
    }

    public String getExtension() {
        return extension;
    }

    public void setExtension(String extension) {
        this.extension = extension;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public Office getOffice() {
        return office;
    }

    public void setOffice(Office office) {
        this.office = office;
    }

    public Employee getBoss() {
        return boss;
    }

    public void setBoss(Employee boss) {
        this.boss = boss;
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeCode=" + employeeCode +
                ", name='" + name + '\'' +
                ", lastName1='" + lastName1 + '\'' +
                ", lastName2='" + lastName2 + '\'' +
                ", extension='" + extension + '\'' +
                ", email='" + email + '\'' +
                ", rol='" + rol + '\'' +
                ", office=" + office +
                ", boss=" + boss +
                '}';
    }
}
