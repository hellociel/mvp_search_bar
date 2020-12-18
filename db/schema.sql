--------------------------------------------------- SCHEMA DESIGN

DROP DATABASE IF EXISTS search_bar;

CREATE DATABASE search_bar;

USE search_bar;

CREATE TABLE orders (
    id INT AUTO_INCREMENT,
    region VARCHAR(30),
    country VARCHAR(50),
    item_type VARCHAR(20),
    sales_channel VARCHAR(10),
    order_priority VARCHAR(1),
    order_date DATE,
    order_id INT,
    ship_date DATE,
    units_sold INT,
    unit_price DECIMAL(6,2),
    unit_cost DECIMAL(6,2),
    total_revenue DECIMAL(10,2),
    total_cost DECIMAL(10,2),
    total_profit DECIMAL(10,2),
    PRIMARY KEY (id)
);

--------------------------------------------------- INDEXING

-- CREATE INDEX region
-- ON orders (region);

-- CREATE INDEX country
-- ON orders (country);

-- CREATE INDEX item_type
-- ON orders (item_type);

-- CREATE INDEX sales_channel
-- ON orders (sales_channel);

-- CREATE INDEX  ship_date DATE,
-- ON orders (region);

CREATE INDEX order_id
ON orders (order_id);

--------------------------------------------------- SEEDING

LOAD DATA LOCAL INFILE '/Users/cielkim/Desktop/rethink/search_bar/csv/5M_sales_records.csv'
INTO TABLE orders
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(region, country, item_type, sales_channel, order_priority, @order_date, order_id, @ship_date, units_sold, unit_price, unit_cost, total_revenue, total_cost, total_profit)
SET order_date = STR_TO_DATE(@order_date, '%m/%d/%Y'), ship_date = STR_TO_DATE(@ship_date, '%m/%d/%Y');





-- ORDER ID RANGE ( 100000321- 999999892 )