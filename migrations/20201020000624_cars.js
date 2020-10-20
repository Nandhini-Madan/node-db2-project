


exports.up = async function(knex) {
      await knex.schema.createTable("cars",(table)=>{
          /**- The critical information for each car is the VIN, make, model, and mileage.
    - They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.*/
      table.increments("id")
      table.text("name").notNull()
      table.text("VIN").notNull()
      table.text("make").notNull()
      table.text("model").notNull()
      table.float("mileage").notNull()
    })
    };
    exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("cars")
    };
