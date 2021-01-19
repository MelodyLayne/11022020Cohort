
create table expenses (
    id serial primary key not null,
    description varchar(100) not null,
    number_of_units numeric(10,3) not null,
    rate numeric(10,3) not null,
    invoice_id integer references invoices(id) not null
);
