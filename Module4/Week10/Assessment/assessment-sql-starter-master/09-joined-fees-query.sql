SELECT
customers.name,
invoices.invoice_number,
fees.description,
fees.amount
FROM customers
JOIN invoices ON (invoices.customer_id = customers.id)
JOIN fees ON (invoices.id = fees.invoice_id )
ORDER BY NAME;

