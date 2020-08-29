const {Model} = require('objection');

class Invoice extends Model {
    static get tableName() {
        return "Invoices";
    }

    static get relationMappings(){
        const Customer = require("../models/Customer");
        return {
        customer : {
            relation : Model.BelongsToOneRelation,
            modelClass : Customer,
            join  : {
                from : "Invoices.CustomerId",
                to : "Customer.id"
            }
        }
      }
    }
}


module.exports = Invoice;