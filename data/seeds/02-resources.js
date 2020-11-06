exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "Vacuum", resource_desc: "Vrr!" },
        { resource_name: "Mop", resource_desc: "Swoosh!" },
        { resource_name: "Human" },
      ]);
    });
};
