package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.ProductDTO;
import com.campus.fenixgarden.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    @GetMapping
    public List<ProductDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/gama-name/{gama}")
    public List<Object> findOrnamentalProductsInStockGreaterThan100(@PathVariable String gama){ return productService.findOrnamentalProductsInStockGreaterThan100(gama);}

    @GetMapping("/not-in-order")
    public List<Object> findProductsNeverOrdered(){
        return productService.findProductsNeverOrdered();
    }

    @GetMapping("/not-in-order-with-name")
    public List<Object> findProductsNeverOrderedWithName(){
        return productService.findProductsNeverOrderedWithName();
    }

    @GetMapping("/prices-range")
    public List<Object> findMaxAndMinProductPrices(){
        return productService.findMaxAndMinProductPrices();
    }

    @GetMapping("/top-20-best-selling")
    public List<Object> findTop20BestSellingProducts(){
        return productService.findTop20BestSellingProducts();
    }


}

