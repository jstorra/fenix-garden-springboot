package com.campus.fenixgarden.models.orderdetail;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class OrderDetailId implements Serializable {
    @Column(name = "codigo_pedido")
    private Long orderCode;

    @Column(name = "codigo_producto")
    private String productCode;

    public OrderDetailId(Long orderCode, String productCode) {
        this.orderCode = orderCode;
        this.productCode = productCode;
    }

    public Long getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(Long orderCode) {
        this.orderCode = orderCode;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }
}
