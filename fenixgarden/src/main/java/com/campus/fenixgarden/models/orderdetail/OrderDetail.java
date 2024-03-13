package com.campus.fenixgarden.models.orderdetail;

import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.models.Product;
import jakarta.persistence.*;

@Entity
@Table(name = "detalle_pedido")
public class OrderDetail {

    @EmbeddedId
    private OrderDetailId id;

    @ManyToOne
    @MapsId("orderCode")
    @JoinColumn(name = "codigo_pedido")
    private Order order;

    @ManyToOne
    @MapsId("productCode")
    @JoinColumn(name = "codigo_producto")
    private Product product;

    @Column(name = "cantidad", nullable = false)
    private int amount;

    @Column(name = "precio_unidad", nullable = false)
    private double unitPrice;

    @Column(name = "numero_linea", nullable = false)
    private int numberLine;

    public OrderDetailId getId() {
        return id;
    }

    public void setId(OrderDetailId id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getNumberLine() {
        return numberLine;
    }

    public void setNumberLine(int numberLine) {
        this.numberLine = numberLine;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + id +
                ", order=" + order +
                ", product=" + product +
                ", amount=" + amount +
                ", unitPrice=" + unitPrice +
                ", numberLine=" + numberLine +
                '}';
    }
}
