package com.campus.fenixgarden.controllers;

import com.campus.fenixgarden.models.dtos.PaymentDTO;
import com.campus.fenixgarden.services.PaymentService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
@PreAuthorize("hasRole('ADMIN')")
@SecurityRequirement(name = "bearerAuth")
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @GetMapping
    public List<PaymentDTO> getAllPayments() {
        return paymentService.getALllPayments();
    }

    // 1)
    @GetMapping("/payment-by-paypal")
    public List<PaymentDTO> findPaymentsIn2008ByPaypal(){
        return paymentService.findPaymentsIn2008ByPaypal();
    }

    // 2)
    @GetMapping("/way-to-pay")
    public List<String> findAllPaymentMethods(){
        return paymentService.findAllPaymentMethods();
    }

    // 3)
    @GetMapping("/average-payment")
    public double findAveragePaymentFor2009(){
        return paymentService.findAveragePaymentFor2009();
    }

    // 4)
    @GetMapping("/total-payment-by-year")
    public List<Map<Object, Object>> findTotalPaymentsByYear(){
        return paymentService.findTotalPaymentsByYear();
    }
}
