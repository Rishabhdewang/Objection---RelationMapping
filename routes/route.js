const express = require("express");
const app = express.Router();

const { Model} = require("Objection");
const Customer = require('../models/Customer');
const Invoices = require('../models/Invoices');



app.get('/allCustomer', async (req,res) => {
    const allCustomer = await Customer.query();
    res.send(allCustomer);
})

app.get('/allInvoices', async (req,res) => {
    const Invoice = await Invoices.query();
    res.send(Invoice);
})

app.post('/Customer/:id', async (req,res) => {
    let id=req.params.id;
    const Customers = await Customer.query().where("id",id).skipUndefined().withGraphFetched('invoices').throwIfNotFound();
    res.send(Customers);
})

app.get('/Invoice/:id', async (req,res) => {
    const Invoice = await Invoices.query().where("id", req.params.id).skipUndefined().withGraphFetched('customer');
    res.send(Invoice);
})

app.post('/addCustomer', async (req,res) => {
    const data = await Customer.query().insert(req.body);
    res.send(data)
})

app.post('/addInvoices', async (req,res) => {
    // const data = await Invoices.query().insert(req.body);
    const data = await Invoices.query().insertGraph(req.body);
    res.send(data);
})

app.post('/updateCustomers/:id', async (req,res) => {
    const updatedData = await Customer.query().findById(req.params.id)
    .patch(req.body);
    res.sendStatus(200);
})

app.post('/updateInvoices/:id', async (req,res) => {
    const Updateddata = await Invoices.query().findById(req.params.id)
    .patch(req.body);
    res.status(200);
})

app.get('/deleteCustomer/:id', async (req,res) => {
    const query = await Customer.query().delete(req.params.id);
})

app.get('/deleteInvoices/:id', async (req,res) => {
    const query = await Invoices.query().delete(req.params.id);
})


module.exports = app;