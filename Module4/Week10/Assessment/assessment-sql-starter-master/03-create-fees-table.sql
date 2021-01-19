create table fees (
    id serial Primary Key not null,
    description varchar(100) not null,
    amount numeric(10,3) not null,
    invoice_id integer references invoices (id) not null
);
