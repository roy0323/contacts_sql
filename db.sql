CREATE DATABASE contacts_db;
USE contacts_db;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    mobile_number VARCHAR(20)
);

SELECT * FROM contacts;