
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: 'JT3756RTB4589', make: 'Toyota', model: '4Runner', mileage: 279000, transmissionType: 'Automatic', titleStatus: 'clean'},
        { vin: 'OXA4567BTS963', make: 'Toyota', model: 'Corolla', mileage: 152000, transmissionType: 'Automatic', titleStatus: 'clean'},
        { vin: 'RTY7567BTS6472', make: 'Toyota', model: 'Land Cruiser', mileage: 109000, transmissionType: 'Automatic', titleStatus: 'clean'}
      ]);
    });
};
