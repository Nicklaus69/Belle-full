CREATE DATABASE customer_command;

USE customer_command;

CREATE TABLE menu (
  name VARCHAR(50) NOT NULL,
  quantity INT,
  price DECIMAL(10,2)
);