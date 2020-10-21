
exports.seed = async function(knex) {
  // Deletes ALL existing entries
 await knex('cars').truncate()
 await knex ("cars").insert([
{
  name:"BMW",VIN:"JTKDE167680262493",make:"germany",model:"2000",mileage:"4.2"
}
 ])
   
};
