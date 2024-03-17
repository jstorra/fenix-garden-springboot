package com.campus.fenixgarden.services;

import com.campus.fenixgarden.exceptions.InvalidCountryFormatException;
import com.campus.fenixgarden.models.Product;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.ProductDTO;
import com.campus.fenixgarden.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public List<ProductDTO> getAllProducts(){
        return productRepository.findAll().stream()
                .map(Product::toDTO)
                .toList();
    }

    // 1)
    public List<ProductDTO> findOrnamentalProductsInStockGreaterThan100(String gama){
        char[] gamaArray = gama.toCharArray();
        for (char c : gamaArray) {
            if (Character.isDigit(c))
                throw new InvalidCountryFormatException("The parameter must not contain numbers");
        }
        return productRepository.findOrnamentalProductsInStockGreaterThan100(gama).stream()
                .map(Product::toDTO)
                .toList();
    }

    // 2)
    public List<ProductDTO> findProductsNeverOrdered(){
        return productRepository.findProductsNeverOrdered().stream()
                .map(Product::toDTO)
                .toList();
    }

    // 3)
    public List<Map<Object, Object>> findProductsNeverOrderedWithName() {
        List<Object[]> results = productRepository.findProductsNeverOrderedWithName();
        return TransformResultList.transformResultList(results, "name", "description", "image");
    }

    // 4)
    public List<Map<Object, Object>> findMaxAndMinProductPrices() {
        List<Object[]> results = productRepository.findMaxAndMinProductPrices();
        return TransformResultList.transformResultList(results, "salePrice", "salePrice");
    }

    // 5)
    public List<Map<Object, Object>> findTop20BestSellingProducts() {
        List<Object[]> results = productRepository.findTop20BestSellingProducts();
        return TransformResultList.transformResultList(results, "name", "productCode");
    }
}
