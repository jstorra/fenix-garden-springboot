# Fenix Garden - Spring Boot

- [Introduction](#introduction)
- [Tecnologies](#technologies)
- [Usage](#usage)
- [Database](#database)
    - [Model](#model)
    - [Queries](#queries)
- [Backend](#backend)
    - [Classes Diagram](#classes-diagram)
    - [Models](#models)
        - [DTOs](#dtos)
    - [Repositories](#repositories)
    - [Services](#services)
    - [Controllers](#controllers)
    - [Exceptions](#exceptions)
    - [Security](#security)
    - [Cors](#cors)
- [Frontend](#frontend)
    - [Designs](#designs)
    - [JavaScript](#javascript)
        - [Endpoints / Entities](#endpoints/entities)
- []

# Introduction

This project aims to develop software that enables the support of operations for a gardening sector company. Its structure encompasses various areas, from office and employee details to the management of clients, orders, products, and payments. Java programming language, Spring Boot framework, and either MySQL or PostgreSQL database will be used for development. The scope of this development is limited to creating a web application with both backend and frontend components following good development practices.

# Database

For this project, there is a database named "fenixgarden," designed to support the operations and management of a company dedicated to gardening. Its structure includes various tables covering key aspects of business operations, from internal office organization and employee management to detailed tracking of products, orders, and financial transactions with customers.

The "oficina" table stores information about the company's different locations, including details such as city, country, and postal code. On the other hand, the "empleado" table encompasses data related to personnel, such as names, positions, and hierarchical relationships. Product management is carried out through the "producto" table, which includes details such as name, range, and quantity in stock.

Customer interaction is recorded in the "cliente" table, where contact information, credit limits, and sales representatives are stored. Orders placed by customers are detailed in the "pedido" table, while the "detalle_pedido" table provides specific information about the products included in each order, such as quantity and price.

Furthermore, the database addresses financial aspects through the "pago" table, which records transactions made by customers, detailing the payment method, date, and total amount. Product range management is defined in the "gama_producto" table, which contains descriptions and links to images for each category of offered products.

Overall, this database (based on MySQL) provides an organized structure to support the comprehensive operation of a gardening company, covering internal management, customer interactions, and associated financial transactions.

## Model

![](./frontend/resources/doc/diagramDB.png)

<details id="queries">
  <summary>Queries</summary>

  - Elemento 1
  - Elemento 2
  - Elemento 3
  
</details>


# Technologies

- JWT
- JPA
- Java
- MySQL
- [UI Verse](https://uiverse.io/elements?t=css)
- Hibernate
- JavaScript
- HTML/CSS
- Spring Web
- Spring Boot
- Spring Security
- Adobe Illustrator
- Swagger (OpenApi)

# Backend
# Frontend