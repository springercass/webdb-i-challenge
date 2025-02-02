# Database Queries

## Find all customers with postal code 1010

SELECT \* FROM [Customers]
where postalCode = 1010

## Find the phone number for the supplier with the id 11

SELECT phone FROM [Suppliers]
where supplierId = 11

## List first 10 orders ever places, descending by the order date

SELECT _
FROM (SELECT DISTINCT _
FROM [Orders]
LIMIT 10) dt
order by OrderDate desc

## Find all customers that live in London, Madrid, or Brazil

SELECT \* FROM [Customers]
where city = 'London' or city = 'Madrid' or city = 'Brazil'

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

insert into Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
values ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## Update Bilbo Baggins record so that the postal code changes to "11122"

update Customers
set PostalCode = '11122'
where CustomerName = 'Bilbo Baggins'

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

select count (distinct city) from customers

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

SELECT \* FROM [Suppliers]
where length(SupplierName) > 20
