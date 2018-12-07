  
  -- Create the database task_saver_db and specified it for use.
CREATE DATABASE ;
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT FALSE,
PRIMARY KEY (id)
);

