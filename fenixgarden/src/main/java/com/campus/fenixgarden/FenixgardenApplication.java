package com.campus.fenixgarden;

import com.campus.fenixgarden.models.*;
import com.campus.fenixgarden.models.orderdetail.OrderDetail;
import com.campus.fenixgarden.services.*;
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

		CustomerService customerService = context.getBean(CustomerService.class);
		EmployeeService employeeService = context.getBean(EmployeeService.class);
		GamaProductService gamaProductService = context.getBean(GamaProductService.class);
		OfficeService officeService = context.getBean(OfficeService.class);
		OrderDetailService orderDetailService = context.getBean(OrderDetailService.class);
		OrderService orderService = context.getBean(OrderService.class);
		PaymentService paymentService = context.getBean(PaymentService.class);
		ProductService productService = context.getBean(ProductService.class);


//		List<Customer> customers = customerService.getAllCustomers();
//		System.out.println(customers);
//
//		List<Employee> employees = employeeService.getAllEmployees();
//		System.out.println(employees);
//
//		List<GamaProduct> gamaProducts = gamaProductService.getAllGamaProducts();
//		System.out.println(gamaProducts);
//
//		List<Office> offices = officeService.getAllOffices();
//		System.out.println(offices);
//
//
//		List<Payment> payments = paymentService.getALllPayments();
//		System.out.println(payments);
//
//		List<Product> products = productService.getAllProducs();
//		System.out.println(products);

//		List<Order> orders = new ArrayList<>();
//		orders = orderService.getAllOrders();
//		System.out.println(orders);

//		List<OrderDetail> orderDetails = new ArrayList<>();
//		orderDetails = orderDetailService.getAllOrderDetails();
//		System.out.println(orderDetails);



	}

}
