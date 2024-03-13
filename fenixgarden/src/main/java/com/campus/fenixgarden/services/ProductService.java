package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Product;
import com.campus.fenixgarden.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    public ProductRepository productRepository;

    public List<Product> getAllProducs(){
        return productRepository.findAll();
    }
}
