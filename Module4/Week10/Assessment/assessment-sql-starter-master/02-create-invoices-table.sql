create table invoices (
    id serial Primary Key not null,
    invoice_number varchar(20) unique not null,
    created_at timestamp not null,
    paid_on timestamp,
    customer_id integer references customers (id) not null
);
