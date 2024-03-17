package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.ProductDTO;
import com.campus.fenixgarden.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping
    public List<ProductDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    // 1)
    @GetMapping("/gama-name/{gama}")
    public List<ProductDTO> findOrnamentalProductsInStockGreaterThan100(@PathVariable String gama) {
        return productService.findOrnamentalProductsInStockGreaterThan100(gama);
    }

    // 2)
    @GetMapping("/not-in-order")
    public List<ProductDTO> findProductsNeverOrdered(){
        return productService.findProductsNeverOrdered();
    }

    // 3)
    @GetMapping("/not-in-order-with-name")
    public List<Map<Object, Object>> findProductsNeverOrderedWithName(){
        return productService.findProductsNeverOrderedWithName();
    }

    // 4)
    @GetMapping("/prices-range")
    public List<Map<Object, Object>> findMaxAndMinProductPrices(){
        return productService.findMaxAndMinProductPrices();
    }

    // 5)
    @GetMapping("/top-20-best-selling")
    public List<Map<Object, Object>> findTop20BestSellingProducts(){
        return productService.findTop20BestSellingProducts();
    }
}
