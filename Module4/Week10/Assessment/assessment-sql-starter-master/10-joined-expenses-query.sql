SELECT
customers.name,
invoices.invoice_number,
expenses.description,
expenses.number_of_units,
expenses.rate
FROM customers
JOIN invoices ON (invoices.customer_id = customers.id)
JOIN expenses ON (invoices.id = expenses.invoice_id )
ORDER BY name;
