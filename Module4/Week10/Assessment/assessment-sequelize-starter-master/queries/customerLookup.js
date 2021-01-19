const { Customer, Invoice  } = require('../models');
const invoice = require('../models/invoice');

async function lookupCustomerAndInvoicesById(id) {
  const customer = await Customer.findByPk(id, {
    include: Invoice,
  });

  return customer;
};

async function lookupCustomersByName(name) {
  const customers = await Customer.findAll({
    where: {
      name,
    }
  });
  return customers;
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  const invoice = await Invoice.findOne({
    where: {
      invoiceNumber,
    },
    include: Customer
  });
  return invoice.Customer;
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
