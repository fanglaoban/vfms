package com.vfms;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.vfms.dao")
public class VfmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(VfmsApplication.class, args);
	}
}
