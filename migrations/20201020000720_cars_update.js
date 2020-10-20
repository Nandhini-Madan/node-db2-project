
exports.up = async function(knex) { 
        await knex.schema.alterTable("cars",(table)=>{
        table.text("transmissionType").defaultTo("manual") 
    table.text("Status")  
        })
      };
      
      exports.down = async function(knex) {
        await knex.schema.alterTable("cars",(table)=>{
            table.dropColumn("transmissionType")
    table.dropColumn("Status")
        })
      };
    
