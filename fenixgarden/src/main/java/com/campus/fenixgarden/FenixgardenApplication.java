package com.campus.fenixgarden;

import com.campus.fenixgarden.models.Customer;
import com.campus.fenixgarden.models.Order;
import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.services.CustomerService;
import com.campus.fenixgarden.services.OrderDetailService;
import com.campus.fenixgarden.services.OrderService;
import jakarta.xml.bind.SchemaOutputResolver;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class FenixgardenApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(FenixgardenApplication.class, args);
		OrderService orderService = context.getBean(OrderService.class);
		OrderDetailService orderDetailService = context.getBean(OrderDetailService.class);
		CustomerService customerService = context.getBean(CustomerService.class);

	}
}
