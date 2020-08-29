
exports.up = function(knex) {
  return knex.schema.createTable("Customer", t1 =>{
      t1.increments('id').primary(),

      t1.string("Name"),

      t1.integer('phone no'),

      t1.integer('Address'),

      t1.timestamps(false,true)

  })
  .createTable("Invoices", t2 => {
      t2.increments('id'),

      t2.integer("CustomerId").references("id").inTable('Customer'),

      t2.string("productName"),

      t2.string("Quantity"),

      t2.string("TotalAmount");

  })
};

exports.down = function(knex) {

    return knex.schema.dropTable("Customer").dropTable("Invoices");
  
};
