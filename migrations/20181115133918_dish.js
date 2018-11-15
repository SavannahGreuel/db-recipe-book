
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl => {
      tbl.increment();
      tbl.string('dish', 200).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes')
};
