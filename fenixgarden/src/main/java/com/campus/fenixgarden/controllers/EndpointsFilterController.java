package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.exceptions.EndpointException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin("*")
public class EndpointsFilterController {
    List<String> allowedEndpoints = new ArrayList<>(Arrays.asList(
            "customers", "employees", "gamaproducts", "offices",
            "orders", "orderdetails", "payments", "products"
    ));

    @GetMapping("/{endpoint}")
    public void handleEndpoints(@PathVariable String endpoint) {
        if (!allowedEndpoints.contains(endpoint))
            throw new EndpointException("Endpoint '" + endpoint + "' doesn't exist in the API");
    }
}
