package com.campus.fenixgarden.repositories;

import com.campus.fenixgarden.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, String> {
    //1
    @Query("SELECT p FROM Product p WHERE p.gamaProduct.gama = ?1 AND p.amountInStock > 100 ORDER BY p.salePrice DESC")
    List<Product> findOrnamentalProductsInStockGreaterThan100(String gama);

    //2
    @Query("SELECT p FROM Product p WHERE p.productCode NOT IN (SELECT DISTINCT d.product.productCode FROM OrderDetail d)")
    List<Product> findProductsNeverOrdered();

    //3
    @Query("SELECT p.name, p.description, p.gamaProduct.image FROM Product p WHERE p.productCode NOT IN (SELECT DISTINCT d.product.productCode FROM OrderDetail d)")
    List<Object[]> findProductsNeverOrderedWithName();

    //4
    @Query("SELECT MAX(p.salePrice), MIN(p.salePrice) FROM Product p")
    List<Object[]> findMaxAndMinProductPrices();

    //5
    @Query("SELECT d.product.name, d.product.productCode, SUM(d.amount) AS totalUnitsSold " +
            "FROM OrderDetail d " +
            "GROUP BY d.product.productCode " +
            "ORDER BY totalUnitsSold DESC " +
            "LIMIT 20")
    List<Object[]> findTop20BestSellingProducts();
}
