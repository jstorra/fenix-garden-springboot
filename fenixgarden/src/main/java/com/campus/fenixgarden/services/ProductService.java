package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Product;
import com.campus.fenixgarden.models.dtos.ProductDTO;
import com.campus.fenixgarden.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    public ProductRepository productRepository;

    public List<ProductDTO> getAllProducts(){
        return productRepository.findAll().stream()
                .map(Product::toDTO)
                .toList();
    }

    public List<Object> findOrnamentalProductsInStockGreaterThan100(String gama){
        return productRepository.findOrnamentalProductsInStockGreaterThan100(gama);
    }

    public List<Object> findProductsNeverOrdered(){
        return productRepository.findProductsNeverOrdered();
    }

    public List<Object> findProductsNeverOrderedWithName(){
        return productRepository.findProductsNeverOrderedWithName();
    }
    public List<Object> findMaxAndMinProductPrices(){
        return productRepository.findMaxAndMinProductPrices();
    }

    public List<Object> findTop20BestSellingProducts(){
        return productRepository.findTop20BestSellingProducts();
    }
}
