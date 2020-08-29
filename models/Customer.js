const { Model } = require('objection');
const Invoice  = require('./Invoices');

class Customer extends Model {
 static get tableName() {
     return "Customer";
 }   

  static get relationMappings() {
    return {
      invoices :{
        relation : Model.HasManyRelation,
        modelClass: Invoice,
        join : {
            from : "Customer.id",
            to : "Invoices.CustomerId"
        }
     }
   }
 }
};

module.exports = Customer;