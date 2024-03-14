package com.campus.fenixgarden;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class FenixgardenApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(FenixgardenApplication.class, args);

	}
}
