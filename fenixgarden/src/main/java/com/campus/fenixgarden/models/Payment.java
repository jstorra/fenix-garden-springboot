package com.campus.fenixgarden.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "pago")
public class Payment {
    @Id
    @Column(name = "id_transaccion", nullable = false)
    private String transactionId;

    @Column(name = "forma_pago", nullable = false)
    private String wayToPay;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_pago", nullable = false)
    private LocalDate paymentDate;

    @Column(name = "total", nullable = false)
    private double total;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "codigo_cliente")
    private Customer customer;

    public String getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(String transactionId) {
        this.transactionId = transactionId;
    }

    public String getWayToPay() {
        return wayToPay;
    }

    public void setWayToPay(String wayToPay) {
        this.wayToPay = wayToPay;
    }

    public LocalDate getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDate paymentDate) {
        this.paymentDate = paymentDate;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "transactionId='" + transactionId + '\'' +
                ", wayToPay='" + wayToPay + '\'' +
                ", paymentDate=" + paymentDate +
                ", total=" + total +
                ", customer=" + customer +
                '}';
    }
}
